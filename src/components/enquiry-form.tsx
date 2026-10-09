"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnquiryForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const enquiry = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setStatus(result.error ?? "We could not send your enquiry. Please try again.");
        return;
      }

      form.reset();
      setStatus("Thank you — your enquiry has been sent. We’ll be in touch soon.");
    } catch {
      setStatus("A connection problem prevented sending. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-label">
          Full name
          <input
            className="form-control"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>
        <label className="form-label">
          Phone
          <input
            className="form-control"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            autoComplete="tel"
            maxLength={40}
            required
          />
        </label>
        <label className="form-label sm:col-span-2">
          Email
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
        <label className="form-label sm:col-span-2">
          Treatment of interest
          <select
            className="form-control"
            name="treatment"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Choose a treatment
            </option>
            <option>Cardiac care</option>
            <option>Dental treatment</option>
            <option>Joint replacement</option>
            <option>Cosmetic &amp; hair restoration</option>
            <option>Health check-up</option>
            <option>Wellness retreat</option>
          </select>
        </label>
        <label className="form-label sm:col-span-2">
          Tell us more
          <textarea
            className="form-control min-h-28 resize-y"
            name="message"
            placeholder="Your condition, reports you have, preferred dates…"
            rows={4}
            maxLength={5000}
          />
        </label>
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-5 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            Sending <LoaderCircle size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Send my enquiry <ArrowRight size={16} />
          </>
        )}
      </Button>
      <p aria-live="polite" role="status" className="mt-3 min-h-5 text-center text-xs text-muted">
        {status}
      </p>
      <p className="mt-3 text-center text-[11px] leading-5 text-muted">
        Your enquiry is sent securely to our care team. Your information is
        never shared with third parties without your consent.
      </p>
    </form>
  );
}