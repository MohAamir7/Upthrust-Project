 import { useState } from "react";
 
 export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consented, setConsented] = useState(false);
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!consented) {
      setStatus("Please confirm your newsletter consent.");
      return;
    }
    // Connect this handler to your newsletter service/API when ready.
    setStatus("Thanks — the form is ready to connect to your newsletter service.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="mb-[14px] block text-sm" htmlFor="upthrust-email">
        Sign up for our emails
      </label>

      <label className="flex max-w-[370px] cursor-pointer items-start gap-2 text-[10px] leading-[1.35] text-[#c7c7c7]">
        <input
          type="checkbox"
          checked={consented}
          onChange={(event) => setConsented(event.target.checked)}
          className="mt-px h-[10px] w-[10px] flex-none accent-[#ff3d08]"
        />
        <span>
          By checking this box sign up for our newsletter and receive marketing
          emails and updates on our services. You can unsubscribe at any time.
        </span>
      </label>

      <div className="mt-3 flex flex-col items-start gap-3">
        <input
          id="upthrust-email"
          type="email"
          placeholder="typehere@youremail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
          className="w-full min-w-0 border-0 bg-transparent p-0 [font-family:inherit] text-sm text-[#f7f7f7] outline-none placeholder:text-[#777] placeholder:opacity-100"
        />
        <button
          type="submit"
          className="cursor-pointer border-0 bg-transparent p-0 [font-family:inherit] text-sm text-[#f7f7f7] hover:text-[#ff3d08]"
        >
          Submit
        </button>
      </div>
      <p className="mt-2 min-h-3 text-[11px] text-[#777]" aria-live="polite">{status}</p>
    </form>
  );
}