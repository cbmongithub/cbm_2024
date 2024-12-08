import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
// biome-ignore lint/style/useImportType: <explanation>
import { NextRequest, NextResponse } from "next/server";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const rateLimiter = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.fixedWindow(1, "60s"), // 1 request per minute
});

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		if (!body || !body.email) {
			return NextResponse.json({ message: "Invalid request" }, { status: 400 });
		}

		const rateLimitState = await rateLimiter.limit(body.email);
		if (!rateLimitState.success) {
			const timeRemainingMs = rateLimitState.reset - Date.now();
			const timeRemaining = Math.ceil(timeRemainingMs / 60000);
			return NextResponse.json(
				{
					message: `Rate limit exceeded. Try again in ${timeRemaining} minutes.`,
				},
				{
					status: 429,
					headers: {
						"X-RateLimit-Limit": rateLimitState.limit.toString(),
						"X-RateLimit-Remaining": rateLimitState.remaining.toString(),
					},
				},
			);
		}

		const headers = new Headers();
		headers.set("X-RateLimit-Limit", rateLimitState.limit.toString());
		headers.set("X-RateLimit-Remaining", rateLimitState.remaining.toString());

		// Handle the email subscription after the rate limit check
		// Add your email subscription logic here

		return NextResponse.json(
			{ message: "Subscription successful" },
			{ headers },
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 },
		);
	}
}
// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";
// import type { NextApiRequest, NextApiResponse } from "next";

// const redis = new Redis({
// 	url: process.env.UPSTASH_REDIS_REST_URL,
// 	token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// 	if (req.method === "POST") {
// 		// Handle the subscription logic here
// 		const { email } = req.body;

// 		if (!email) {
// 			res.status(400).json({ error: "Email is required" });
// 			return;
// 		}

// 		// Simulate adding the email to a subscription list
// 		res.status(200).json({ message: "Subscribed successfully", email });
// 	} else {
// 		res.status(405).json({ error: "Method not allowed" });
// 	}
// }
