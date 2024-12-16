import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import EmailTemplate from "@/_components/email-template";
import { getPosts } from "@/_lib/posts";
import type { MetadataWithSlug } from "@/_types";

const resend = new Resend(process.env["RESEND_API_KEY"]);

const posts = getPosts();

posts.sort((a, b) => {
  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
    return -1;
  }
  return 1;
});
const post = posts[0];

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Christian B. Martinez",
      to: [email],
      subject: "Hello world",
      react: EmailTemplate(post as MetadataWithSlug),
    });
    console.log(data, error);
    return NextResponse.json({ email }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `${error as Error}` }, { status: 500 });
  }
}
