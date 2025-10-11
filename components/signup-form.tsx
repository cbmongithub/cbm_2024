"use client";

import { Button } from "components/ui/button";
import { type ChangeEvent, type FormEvent, useState } from "react";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/email/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        setError(true);
        setTimeout(() => {
          setError(false);
          setEmail("");
        }, 3000);
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setEmail("");
      }, 3000);
    } catch (error) {
      setError(true);
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
      setTimeout(() => {
        setError(false);
        setEmail("");
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-6 rounded-2xl bg-neutral-950/50 p-6 sm:p-10"
      onSubmit={handleSubmit}
    >
      <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-300">
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
        <span className="tracking-normal text-neutral-100">
          Stay up to date
        </span>
      </h2>
      <p className="text-sm text-neutral-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          value={email}
          placeholder="Email address"
          aria-label="Email address"
          required={true}
          className="z-50 relative flex-1 appearance-none rounded-lg border border-neutral-800/60 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <Button
          type="submit"
          className="relative z-30 sm:w-auto"
          variant="primary"
        >
          Signup
        </Button>
      </div>
      <div className="min-h-[1.5rem]" aria-live="polite">
        {success && (
          <p className="text-sm text-emerald-400">
            You have successfully subscribed!
          </p>
        )}
        {error && (
          <p className="text-sm text-red-400">
            {errorMessage || "An error occurred. Please try again."}
          </p>
        )}
      </div>
    </form>
  );
};
