// ./frontend/app/api/subscribe-investor/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  try {
    await resend.sendEmail({
      to: "torkmatin@gmail.com",
      subject: `New Investor Form Submission from ${name}`,
      body: `You have a new message from ${name} (${email}):\n\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
