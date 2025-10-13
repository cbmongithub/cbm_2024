"use client";

import { Button } from "components/ui/button";
import { type ChangeEvent, type FormEvent, useId, useState } from "react";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const emailFieldId = useId();
  const feedbackId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/email/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const payload = await response.json().catch(() => undefined);

      if (!response.ok) {
        const errorText =
          (payload && (payload.error ?? payload.message)) ||
          "Unable to subscribe right now. Please try again later.";
        setStatus("error");
        setMessage(errorText);
        return;
      }

      setStatus("success");
      setMessage(
        (payload && (payload.message ?? payload.success)) ||
          "You have successfully subscribed!"
      );
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  const isSubmitting = status === "submitting";
  const showSuccess = status === "success";
  const showError = status === "error";

  return (
    <form
      className="flex w-full flex-col gap-6 rounded-2xl border border-neutral-800/60 bg-neutral-950/45 p-6 sm:p-10"
      onSubmit={handleSubmit}
      noValidate
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
        <label htmlFor={emailFieldId} className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id={emailFieldId}
          onChange={handleChange}
          value={email}
          placeholder="Email address"
          aria-label="Email address"
          aria-describedby={feedbackId}
          aria-invalid={showError || undefined}
          required={true}
          className="relative z-50 flex-1 appearance-none rounded-lg border border-neutral-800/60 bg-neutral-900/70 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
          autoComplete="email"
        />
        <Button
          type="submit"
          className="relative z-30 sm:w-auto"
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting…" : "Signup"}
        </Button>
      </div>
      <div
        id={feedbackId}
        className="min-h-[1.5rem]"
        aria-live="polite"
        aria-atomic="true"
      >
        {showSuccess ? (
          <p className="text-sm text-emerald-400">{message}</p>
        ) : null}
        {showError ? <p className="text-sm text-red-400">{message}</p> : null}
      </div>
    </form>
  );
};
