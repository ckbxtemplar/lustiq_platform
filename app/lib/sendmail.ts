'use server';

import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SMTP_SERVER_PORT = process.env.SMTP_SERVER_PORT;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const BASE_PROTOCOL = process.env.BASE_PROTOCOL;
const BASE_URL = process.env.BASE_URL;

const transporter = nodemailer.createTransport({
  host: SMTP_SERVER_HOST,
  port: Number(SMTP_SERVER_PORT),
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text?: string;
  html?: {
    template: string;
    params: { [key: string]: string | number };
  };
}) {
  try {
    // A layout fájl elérési útja (Next.js mappaszerkezet szerint)
    const layoutPath = path.join(process.cwd(), 'app', 'ui', 'email', 'layout.html');
    const layoutSource = await fs.promises.readFile(layoutPath, 'utf8');

    // A megfelelő sablon fájl elérési útja
    const templatePath = path.join(process.cwd(), 'app', 'ui', 'email', `${html?.template}.html`);
    const templateSource = await fs.promises.readFile(templatePath, 'utf8');

    // Handlebars sablonok kompilálása
    const layoutTemplate = handlebars.compile(layoutSource);
    const bodyTemplate = handlebars.compile(templateSource);

    // Paraméterek helyettesítése a levél specifikus tartalom fájlban
		const templateParams = {
			...html?.params,
			BASE_PROTOCOL,
			BASE_URL,
		};
    const bodyContent = bodyTemplate(templateParams);

    // A végső HTML létrehozása a layout és a specifikus tartalom kombinálásával
    const finalHtml = layoutTemplate({ body: bodyContent, BASE_PROTOCOL: BASE_PROTOCOL, BASE_URL: BASE_URL });

    // Ellenőrizzük az SMTP kapcsolatot
    const isVerified = await transporter.verify();
    if (!isVerified) {
      console.error('SMTP server is not verified.');
      return;
    }

    // Email küldése
    const info = await transporter.sendMail({
      from: email,
      to: sendTo || SITE_MAIL_RECIEVER,
      subject: subject,
      text: text,
      html: finalHtml, // A végső HTML, amely tartalmazza a layoutot és a specifikus tartalmat
    });

    console.log('Message Sent', info.messageId);
    return info;
  } catch (error) {
    console.error('Something Went Wrong', error);
  }
}
