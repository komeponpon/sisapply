import nodemailer from 'nodemailer';
import config from '../config/config.js';

const transporter = nodemailer.createTransport({
  host: config.emailHost,
  port: config.emailPort,
  secure: true,
  auth: {
    user: config.emailUser,
    pass: config.emailPassword,
  },
});

export const sendEmail = async (to: any, subject: any, text: any) => {
  try {
    const info = await transporter.sendMail({
      from: config.emailFrom,
      to,
      subject,
      text,
    });
    console.log(`Email sent: ${info.messageId}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error sending email: ${err.message}`);
    } else {
      console.error(`Error sending email: An unknown error occurred.`);
    }
  }
};