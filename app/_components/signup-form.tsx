import Button from "./ui/button";

export default function SignUpForm() {
  return (
    <form className="rounded-2xl p-8 sm:p-16 border-neutral-700/40" action="/thank-you">
      <h2 className="flex text-sm font-semibold text-neutral-900 text-neutral-100">
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
          id="email"
          placeholder="Email address"
          aria-label="Email address"
          required={true}
          className="relative min-w-32 flex-auto appearance-none rounded-md border px-3 focus:outline-none focus:ring-4 border-neutral-700 bg-neutral-700/[0.15] text-neutral-200 placeholder:text-neutral-500 focus:border-blue-400 focus:ring-blue-400/10 sm:text-sm"
        />
        <Button className="ml-3 relative z-30">Signup</Button>
      </div>
    </form>
  );
}