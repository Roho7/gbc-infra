'use server';

import nodemailer from 'nodemailer';

export async function sendContactForm(formData: {name: string, phone: string, email: string, message: string}) {
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  const transporter = nodemailer.createTransport({
    host: 'sg1-ls6.a2hosting.com',
    port: 465, // or 587 if not using SSL
    secure: true, // true for port 465, false for 587
    auth: {
      // user: 'hr@gbcinfrastructure.in',
      // pass: '5u@8xL4(h^5L',
      user: 'human-resource@gbcinfrastructure.in',
      pass: 'hrgbc@2023',
    }
  });

  const mailOptions = {
    from: email,
    to: 'human-resource@gbcinfrastructure.in',
    subject: `New contact form submission from ${name}`,
    text: message,
  };

  await transporter.sendMail(mailOptions);
}
