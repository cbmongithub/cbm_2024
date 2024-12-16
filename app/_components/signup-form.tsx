"use client";

import { type FormEvent, useState } from "react";

import Button from "./ui/button";

type SignUpFormProps = {
  email: string;
};

export default function SignUpForm({ email: initialEmail }: SignUpFormProps) {
  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/email/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setSuccess(true);
    } catch (error) {
      setError(`❗️Error: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="z-50 rounded-2xl p-8 sm:p-16 border-neutral-700/40">
      <h2 className="flex text-sm font-semibold text-neutral-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
          role="img"
          aria-labelledby="svgTitle"
        >
          <title id="svgTitle">Envelope Icon</title>
          <path
            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-neutral-100/10 stroke-neutral-500"
          />
          <path
            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className="stroke-neutral-500"
          />
        </svg>
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="text-xs md:text-sm lg:mt-2 text-neutral-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          required={true}
          className="relative min-w-32 flex-auto appearance-none rounded-md border px-3 focus:outline-none focus:ring-4 border-neutral-700 bg-neutral-900/[0.15] text-neutral-200 placeholder:text-neutral-500 focus:border-blue-400 focus:ring-blue-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-3 relative z-30" disabled={loading}>
          {loading ? "Signing up..." : "Signup"}
        </Button>
      </div>
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      {success && <p className="text-xs text-green-500 mt-2">✅ Subscribed</p>}
    </form>
  );
}