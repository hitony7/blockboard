// ./frontend/app/api/subscribe-startup/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();
    const data = await resend.emails.send({
      from: 'BlockBoard <noreply@blockboard.cc>',
      to: ['torkmatin@gmail.com'],
      subject: 'New Startup Form Submission',
      text: `You have a new interested in funds: ${email}`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
