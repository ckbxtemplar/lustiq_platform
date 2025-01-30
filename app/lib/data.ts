// import { sql } from '@vercel/postgres';
import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'viktor',
  password: '1st3nMegbassza01',
  database: 'nextjs_course',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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

/*
export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
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
