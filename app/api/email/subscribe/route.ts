import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);

const POST = async (req: NextRequest) => {
  if (req.method === "POST") {
    const { email } = await req.json();
    try {
      await resend.contacts.create({
        email: email,
        audienceId: "7674c4bf-d841-4147-9871-b1a889805feb",
      });
      // For demonstration, we'll just log the email to the console
      return NextResponse.json({});
    } catch (error) {
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Invalid request method" }, { status: 405 });
  }
}

export default POST;
