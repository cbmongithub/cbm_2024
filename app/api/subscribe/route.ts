import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import type { NextApiRequest, NextApiResponse } from 'next'

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })

const rateLimiter = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(1, '60s'), // 1 request per minute
})

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const rateLimitState = await rateLimiter.limit(req.body);

    res.setHeader('X-RateLimit-Limit', rateLimitState.limit)
    res.setHeader('X-RateLimit-Remaining', rateLimitState.remaining)

    if (!rateLimitState.success) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }

  if (req.method === 'POST') {
    const { email } = await rateLimiter.limit(req.body);
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    try {
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const base64ApiKey = Buffer.from(`apikey:${API_KEY