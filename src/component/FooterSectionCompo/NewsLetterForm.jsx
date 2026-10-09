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
    <form className="upthrust-newsletter" onSubmit={handleSubmit}>
      <label className="upthrust-newsletter-title" htmlFor="upthrust-email">
        Sign up for our emails
      </label>

      <label className="upthrust-consent">
        <input
          type="checkbox"
          checked={consented}
          onChange={(event) => setConsented(event.target.checked)}
        />
        <span>
          By checking this box sign up for our newsletter and receive marketing
          emails and updates on our services. You can unsubscribe at any time.
        </span>
      </label>

      <div className="upthrust-email-row">
        <input
          id="upthrust-email"
          type="email"
          placeholder="typehere@youremail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoComplete="email"
        />
        <button type="submit">Submit</button>
      </div>
      <p className="upthrust-form-status" aria-live="polite">{status}</p>
    </form>
  );
}