import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_4ozELY8W_DbR8Bzxf6V9rY3ZTbkJ18Tf7");

export async function POST(req: Request) {
  try {
    const { date, time, name, email, phone } = await req.json();

    if (!date || !time || !email ||!name || !phone) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Website Schedule <onboarding@resend.dev>", // Verified sender email
      to: ["admin@sunbeamcenter.com"], // Replace with your receiving email
      subject: "New Visit Scheduled",
      html: `
        <h2>New Visit Scheduled</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    // Optional: send confirmation to user
    await resend.emails.send({
      from: "Sunbeam ABA Center  <no-reply@yourdomain.com>",
      to: email,
      subject: "Your Visit is Confirmed",
      html: `
        <h2>Thank you for scheduling a visit!</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>We’ll be in touch soon. 😊</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to schedule" }, { status: 500 });
  }
}
