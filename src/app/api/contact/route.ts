

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
console.log(process.env.EMAIL_USER);

export async function POST(req: Request) {
  console.log(req.body);
  
  try {
    const { name, email, message } = await req.json();
    

    // Setup transporter (SMTP config, example Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS , // your Gmail App Password (not normal password!)
      },
    });

    // Email options
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // your receiving email
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

