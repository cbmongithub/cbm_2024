import Welcome from "components/email/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);

export const POST = async(request: Request) => {
    const { email } = await request.json();
    try {
    const { data, error } = await resend.emails.send({
        from: process.env["RESEND_FROM_EMAIL"]!,
        to: email,
        subject: 'You have successfully subscribed',
        react: Welcome(email),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
