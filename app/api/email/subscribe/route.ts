import Welcome from "components/email/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env["RESEND_API_KEY"]);

export const POST = async (request: Request) => {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return Response.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env["RESEND_FROM_EMAIL"]!,
      to: email,
      subject: "You have successfully subscribed",
      react: Welcome(email),
    });

    if (error) {
      const errorMessage =
        (typeof error === "object" && error && "message" in error
          ? (error as { message?: string }).message
          : undefined) ||
        "Unable to subscribe right now. Please try again later.";

      const statusCode =
        (typeof error === "object" && error && "statusCode" in error
          ? Number((error as { statusCode?: number }).statusCode)
          : undefined) || 500;

      return Response.json({ error: errorMessage }, { status: statusCode });
    }

    return Response.json({
      message: "You have successfully subscribed!",
      id: data?.id ?? null,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again later.";

    return Response.json({ error: errorMessage }, { status: 500 });
  }
};
