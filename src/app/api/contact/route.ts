import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const { name, email, message } = body;

    // 1. Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Define the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `
You have a new message from your portfolio:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
