import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  try {
    // const { name, email, phonenumber, message } = body;

    const data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>", // Verified sender email
      to: ["info@surgecrops.com"], // Replace with your receiving email
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        phonenumber: body.phonenumber,
        message: body.message,
      }),
    });

    // if (error) {
    //   return Response.json({ error: error.message }, { status: 500 });
    // }

    return Response.json({ status: "success", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
