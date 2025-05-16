import mysql from 'mysql2/promise';
import { QueryResult, RowDataPacket } from 'mysql2';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
	User
} from './definitions';
import { auth } from '@/auth';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/* USER */

export async function getUser(email: string, fields?: string[]): Promise<User | undefined> {
	try {
    const selectedFields = Array.isArray(fields) && fields.length > 0
      ? fields.map(f => `\`${f}\``).join(', ')
      : '*';		
		const [user] = await pool.query<(User & RowDataPacket)[]>(`SELECT ${selectedFields} FROM users WHERE email = ? AND status = 1`,[email]);
		return user[0];
	} catch (error) {
		console.error('Failed to fetch user:', error);
		throw new Error('Failed to fetch user.');
	}
}

export async function updateUser(id: string, updates: Record<string, any>): Promise<boolean> {
	try {
		if (Object.keys(updates).length === 0) {
			throw new Error('No fields provided to update.');
		}

		const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
		const values = Object.values(updates);

		const [result] = await pool.query<(User & RowDataPacket)[]>(`
			UPDATE users SET ${fields} WHERE id = ?;
		`, [...values, id]);

		if ((result as any).affectedRows === 0) {
			console.warn(`No user updated with id: ${id}`);
			return false;
		}
		return true;

	} catch (error) {
		console.error('Failed to update user:', error);
		throw new Error('Failed to update user.');
	}
}

type CreateUserResponse = {
  success: number;
  message: string;
	userid?: string;
};
export async function createUser(email: string, password:string, token?: string): Promise<CreateUserResponse> {
	try {
		const fields = ["email", "password"];
		const values = [email, password];

		if (token) {
			fields.push("token");
			values.push(token);
		}

		const query = `INSERT INTO users (${fields.join(", ")}) VALUES (${fields.map(() => "?").join(", ")});`;

		await pool.query<(User & RowDataPacket)[]>(query, values);
	} catch (error: any) {
		if (error.code === 'ER_DUP_ENTRY') { // MySQL egyedi kulcs megszorítási hiba
			console.error(`Email már regisztrálva: ${email}`);
			return {success:0,message:'The given email address is already registered.'}; // Vagy egy saját hibaüzenetet adhatsz vissza
		}

		console.error('Failed to regist user:', error);
		return {success:0,message:'Something went wrong while creating the account.'};
	}
	try {	
		const [user] = await pool.query<(User & RowDataPacket)[]>(`SELECT id FROM users WHERE email='${email}'`);		
		return {success:1, message:'Siker', userid: user[0].id.toString()};
	} catch (error: any) {
		return {success:0,message:'Something went wrong while creating the account.'};
	}
}

export async function checkUserToken(id: string, token: string): Promise<boolean> {
	try {
		const [user] = await pool.query<(User & RowDataPacket)[]>(`SELECT id FROM users WHERE id=? AND token=? LIMIT 1;`, [id, token]);
		return user.length > 0;
	} catch (error) {
		console.error('Failed to check user token:', error);
		return false;
	}
}

type SubscribeUserResponse = {
  success: number;
};

export async function subscribeUser(email: string): Promise<SubscribeUserResponse> {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(`SELECT email FROM subscribers WHERE email = ?`, [email]);

    if (rows.length > 0) {
      return { success: 1 }; // Már feliratkozott
    }

    await pool.query(`INSERT INTO subscribers (email) VALUES (?)`, [email]);

    return { success: 2 }; // Sikeres feliratkozás
  } catch (error: any) {
    console.error("Hiba történt a hírlevél feliratkozás során:", error);
    return { success: 0 }; // Hiba történt
  }
}

/* STRIPE start*/
type LogEventResult = {
  success: boolean
}

export async function logStripeWebhookEvent(
  eventId: string,
	customerId: string | null,
	status: string | null,
  eventType: string,
  userId: string | null,
  payload: any
): Promise<LogEventResult> {
  try {

    await pool.query(
      `INSERT INTO stripe_webhook_events (stripe_event_id, customer, status, event_type, id_user, payload)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        eventId,
				customerId,
				status,
        eventType,
        userId,
        JSON.stringify(payload)
      ]
    )

    return { success: true }
  } catch (error: any) {
    console.error('Hiba történt a webhook esemény mentése közben:', error)
    return { success: false }
  }
}
/* STRIPE end*/

interface BillingAddressData {
  name: string;
  zipcode: string;
  city: string;
  address: string;
  tax: string;
  user_id: string;
}
interface CreateBillingAddressResponse {
  success: boolean;
  id_user_billing_address?: string; // Opcionális, ha sikertelen a művelet
}

export async function createBillingAddress(data: BillingAddressData): Promise<CreateBillingAddressResponse> {
  const { name, zipcode, city, address, tax, user_id } = data;

  try {
    // Ellenőrizzük, hogy létezik-e már a rekord a user_id alapján.
    const [existingRecord]:any = await pool.query(`SELECT id FROM user_billing_addresses WHERE user_id = ?`, [user_id]);

    if (existingRecord && existingRecord.length > 0) {
      // Ha létezik rekord, akkor UPDATE-eljük azt.
      const updateQuery = `
        UPDATE user_billing_addresses 
        SET name = ?, zipcode = ?, city = ?, address = ?, tax = ?
        WHERE user_id = ?
      `;
      
      await pool.query(updateQuery, [name, zipcode, city, address, tax, user_id]);

      return {
        success: true,
        id_user_billing_address: existingRecord[0].id, // Visszaadjuk az ID-t, ami frissült
      };
    } else {
      const insertQuery = `
        INSERT INTO user_billing_addresses (name, zipcode, city, address, tax, user_id)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      
      const [result] = await pool.query(insertQuery, [name, zipcode, city, address, tax, user_id]);
      const selectQuery = `SELECT id FROM user_billing_addresses WHERE user_id = ?`;
      const [newRecord]: any = await pool.query(selectQuery, [user_id]);

      return {
        success: true,
        id_user_billing_address: newRecord[0].id, // Az új rekord UUID-ját adjuk vissza
      };
    }
  } catch (error: any) {
    console.error("Hiba történt a mentés során:", error);
    return {
      success: false,
    };
  }
}

interface FetchBillingAddressResponse {
  success: boolean;
  data?: BillingAddressData; // Opcionális, ha sikertelen a művelet
}

export async function fetchBillingAddress(id_user: string): Promise<FetchBillingAddressResponse> {
	try {
		const [billing_data] = await pool.query<(RowDataPacket)[]>(`SELECT * FROM user_billing_addresses WHERE user_id='${id_user}'`);
    if (billing_data.length === 0) {
      return { success: false };
    }

    const billingAddress: BillingAddressData = {
      name: billing_data[0].name,
      zipcode: billing_data[0].zipcode,
      city: billing_data[0].city,
      address: billing_data[0].address,
      tax: billing_data[0].tax,
      user_id: billing_data[0].user_id,
    };

    return { success: true, data: billingAddress };
	} catch (error) {
		console.error('Failed to fetch billing address:', error);
		throw new Error('Failed to fetch billing address.');
	}
}

/* CMS */

export async function fetchCourses(searchQuery = '')
{
	let populate = `populate[0]=cover&populate[1]=author&populate[2]=Details`;
	let strapi_url = `${process.env.NEXT_PUBLIC_CMS_PROTOCOL}://${process.env.NEXT_PUBLIC_CMS_URL}/api/courses?${populate}`;

	try {
		if (searchQuery!== '') strapi_url += `&filters[title][$contains]=${searchQuery}`;

		const res = await fetch(strapi_url, {
			headers: {
					"Authorization": `Bearer ${process.env.CMS_API_KEY}`
			}
		});

		if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const data = await res.json();
		return data || null;
	} catch (error) {
			console.error("Hiba történt a cikkek lekérése közben:", error);
			return 0;
	}
}

export async function fetchCourse(slug: string)
{
	const session = await auth();
	let cms_fields;
	
	if (!session?.user?.id){
		cms_fields = process.env.CMS_QUERY_PUBLIC;
	}	else {
		cms_fields = process.env.CMS_QUERY_PRIVATE;
	}

	try {
		const res = await fetch('http://localhost:1337/graphql', {
			method: 'POST',
			headers: {
					"Authorization": `Bearer ${process.env.CMS_API_KEY}`,
					'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `
					query {
						courses (filters: { slug: { eq: "${slug}" } }){
							${cms_fields}
						}
					}
				`
			})
		});

		const data = await res.json();
		if (!data.data) {
				throw new Error(`HTTP error! Status: ${res.status}`);
		}

		return data || null;
	} catch (error) {
			console.error("Hiba történt a cikk lekérése közben:", error);
			return false;
	}
}


/* MORE */

export async function fetchCustomers() {
  try {
    const data = await pool.query<(CustomerField & RowDataPacket)[]>(`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `).then(([rows]) => rows);

    const customers = data;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await pool.query<(InvoiceForm & RowDataPacket)[]>(`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = '${id}';
    `).then(([rows]) => rows);

    const invoice = data.map((invoice) => ({
      ...invoice,
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}


/*
export async function fetchRevenue() {
  try {
    const [rows] = await pool.query<(Revenue & RowDataPacket)[]>('SELECT * FROM revenue');
    return rows;
  } catch (error) {
    console.error('Error fetching revenue:', error);
    throw error;
  }
}

export async function fetchLatestInvoices() {
  try {
    const [rows] = await pool.query<(LatestInvoiceRaw & RowDataPacket)[]>(`SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id 
			FROM invoices 
			JOIN customers ON invoices.customer_id = customers.id 
			ORDER BY invoices.date 
			DESC LIMIT 5`);

    const latestInvoices = rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}
*/
export async function fetchCardData() {
  try {
		const invoiceCountPromise =  pool.query<(RowDataPacket)[]>(`SELECT COUNT(*) as c FROM invoices`).then(([rows]) => rows);
		const customerCountPromise =  pool.query<(RowDataPacket)[]>(`SELECT COUNT(*) as c FROM customers`).then(([rows]) => rows);
		const invoiceStatusPromise = pool.query<(RowDataPacket)[]>(`SELECT
			SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS paid,
			SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS pending
			FROM invoices`).then(([rows]) => rows);

    const [
      invoiceCountResult,
      customerCountResult,
      invoiceStatusResult
    ] = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise
    ]);

    const numberOfInvoices = Number(invoiceCountResult[0]?.c ?? '0');
    const numberOfCustomers = Number(customerCountResult[0]?.c ?? '0');
    const totalPaidInvoices = invoiceStatusResult[0]?.paid ?? '0';
    const totalPendingInvoices = invoiceStatusResult[0]?.pending ?? '0';

    return {
      numberOfCustomers,
      numberOfInvoices, 
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

/*
const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const [invoices] = await pool.query<(InvoicesTable & RowDataPacket)[]>(`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      LEFT JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name LIKE '${`%${query}%`}' OR
        customers.email LIKE '${`%${query}%`}' OR
        invoices.amount LIKE '${`%${query}%`}' OR
        invoices.date LIKE '${`%${query}%`}' OR
        invoices.status LIKE '${`%${query}%`}'
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `);

    return invoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}


export async function fetchInvoicesPages(query: string) {
  try {
    const count = await pool.query<RowDataPacket[]>(`SELECT COUNT(*) as c
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
			customers.name LIKE '${`%${query}%`}' OR
			customers.email LIKE '${`%${query}%`}' OR
			invoices.amount LIKE '${`%${query}%`}' OR
			invoices.date LIKE '${`%${query}%`}' OR
			invoices.status LIKE '${`%${query}%`}'
  `).then(([rows]) => rows);

    const totalPages = Math.ceil(Number(count[0]?.c) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

			*/
