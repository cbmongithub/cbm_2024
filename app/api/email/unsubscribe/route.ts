import { Resend } from "resend";
import { redirect } from 'next/navigation'

const resend = new Resend(process.env["RESEND_API_KEY"]);

export const POST = async(request: Request) => {
    const { email } = await request.json();
    try {
    const { error } = await resend.contacts.remove({
            email: email,
            audienceId: process.env["RESEND_AUDIENCE_ID"]!,
          })

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return redirect(`${process.env["NEXT_PUBLIC_BASE_URL"]}/unsubscribed`);

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}