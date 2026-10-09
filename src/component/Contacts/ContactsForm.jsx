import { useState, useRef, useEffect } from "react";
import { FormStatus } from "../../apis/formStatus";
import { trackFormSubmit } from "../../lib/gtm";

const INITIAL = { name: "", email: "", company: "", message: "", website: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please Enter Your Email";
  else if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10)
    e.message = "Please tell us a little more (at least 10 characters).";
  return e;
}
const fieldClass =
  "w-full border-0 border-b border-white/40 bg-transparent py-3 text-lg text-paper placeholder:text-white/40 focus:border-brand focus:outline-none";

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-sm uppercase tracking-wide text-white/70"
      >
        {label}
        {optional && (
          <span className="normal-case tracking-normal text-white/50">
            {" "}
            (optional)
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-brand">
          {error}
        </p>
      )}
    </div>
  );
}

export default function LeadForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const formRef = useRef(null);
  const successRef = useRef(null);

  // Move focus to the success message so screen-reader users hear it
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;

    const found = Validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await FormStatus(values);

      if (res?.ok) {
        trackFormSubmit({
          event: "form_submit",
          form_id: "footer_lead_form",
          form_name: "Lead form",
        });
        setValues(INITIAL);
        setStatus("success");
        return;
      }

      if (res?.status === 400) {
        const serverErrors =
          res?.errors && typeof res.errors === "object" ? res.errors : {};
        const mapped = {};

        for (const [field, msgs] of Object.entries(serverErrors)) {
          const value = Array.isArray(msgs) ? msgs[0] : msgs;
          if (value) mapped[field] = value;
        }

        setErrors(mapped);
        setStatus("idle");
        return;
      }
      setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  }
  if (status === "success") {
    return (
      <div role="status" className="border border-white/30 p-8">
        <h3
          ref={successRef}
          tabIndex={-1}
          className="font-display text-4xl uppercase text-paper focus:outline-none"
        >
          Thank you!
        </h3>
        <p className="mt-3 text-lg text-white/80">
          Your message is on its way. We&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm uppercase tracking-wide text-brand underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6"
      aria-label="Contact form"
    >
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
          placeholder="Your name"
        />
      </Field>

      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
          placeholder="you@company.com"
        />
      </Field>

      <Field id="company" label="Company" optional error={errors.company}>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={handleChange}
          className={fieldClass}
          placeholder="Company name"
        />
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about your project"
        />
      </Field>

      {/* Honeypot: hidden from people, bots fill it in */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Leave this empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="border border-brand p-3 text-brand">
          Something went wrong and your message was not sent. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start bg-white px-8 py-4 text-xl font-bold uppercase tracking-tight text-brand transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
