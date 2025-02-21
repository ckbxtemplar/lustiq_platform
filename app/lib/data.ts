import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
	User
} from './definitions';
import { formatCurrency } from './utils';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function getUser(email: string): Promise<User | undefined> {
	try {
		const [user] = await pool.query<(User & RowDataPacket)[]>(`SELECT * FROM users WHERE email='${email}' AND status = 1`);
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
		// Ezek kellenek
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
		console.log('user id :',user[0].id);
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

export async function fetchArticlesCount()
{
	try {
		const res = await fetch(`${process.env.CMS_PROTOCOL}://${process.env.CMS_URL}:${process.env.CMS_PORT}/api/articles`, {
			headers: {
					"Authorization": `Bearer ${process.env.CMS_API_KEY}`
			}
		});

		if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const data = await res.json();
		return data.meta?.pagination?.total || 0; // Ha nincs adat, akkor 0-t ad vissza
	} catch (error) {
			console.error("Hiba történt a cikkek lekérése közben:", error);
			return 0;
	}
}

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
    const totalPaidInvoices = formatCurrency(invoiceStatusResult[0]?.paid ?? '0');
    const totalPendingInvoices = formatCurrency(invoiceStatusResult[0]?.pending ?? '0');

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
