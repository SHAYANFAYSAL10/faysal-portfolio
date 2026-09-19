"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-md border border-navy-700 bg-navy-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40";

const labelClass = "mb-2 block font-mono text-xs tracking-widest text-slate-400";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="mx-auto mt-10 max-w-2xl text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            NAME
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            EMAIL
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-subject" className={labelClass}>
          SUBJECT
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          maxLength={200}
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-body" className={labelClass}>
          MESSAGE
        </label>
        <textarea
          id="contact-body"
          name="body"
          required
          rows={6}
          maxLength={5000}
          placeholder="Tell me a bit about it..."
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>

        <p
          aria-live="polite"
          className={`min-h-5 text-sm ${state.status === "error" ? "text-red-400" : "text-accent"}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
