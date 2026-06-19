"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  ShieldIcon,
} from "./Icons";
import { submitLead } from "@/app/actions";
import { emptyLeadState } from "@/lib/lead-form";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

export function Lead() {
  const [state, formAction] = useActionState(submitLead, emptyLeadState);

  return (
    <section id="cta" className="relative bg-paper-warm py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: pitch */}
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />
              Get started
            </span>
            <h2 className="mt-5 text-4xl font-black leading-[1.05] md:text-5xl">
              Book your free 10-minute Leak Check.
              <span className="block text-ink-muted">
                One short call. First 30 days protected.
              </span>
            </h2>
            <p className="mt-6 max-w-prose text-lg text-ink-muted">
              Tell us where to reach you. We&rsquo;ll text you within a business
              hour to run the Leak Check on last week&rsquo;s calls, set up your
              rule sheet, and put WaterLine behind your existing line.
            </p>

            <Stagger as="ul" className="mt-8 space-y-3">
              <PromiseLine icon={<PhoneIcon className="h-4 w-4" />}>
                We text you, not call &mdash; you can read it under a sink.
              </PromiseLine>
              <PromiseLine icon={<ClockIcon className="h-4 w-4" />}>
                Setup is one short call, about an hour.
              </PromiseLine>
              <PromiseLine icon={<ShieldIcon className="h-4 w-4" />}>
                One-Job Guarantee. No saved job in 30 days = full refund.
              </PromiseLine>
            </Stagger>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1} className="relative">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-water-100" />
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lift">
              {state.ok ? (
                <SuccessPanel name={state.values.name} />
              ) : (
                <form action={formAction} noValidate className="p-7 md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water-700">
                    Book your 10-minute Leak Check
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-black text-ink">
                    Where should we reach you?
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field
                      name="name"
                      label="Your name"
                      placeholder="Mike Tucker"
                      autoComplete="name"
                      defaultValue={state.values.name}
                      error={state.errors.name}
                    />
                    <Field
                      name="phone"
                      type="tel"
                      label="Phone number"
                      placeholder="(512) 555-0148"
                      autoComplete="tel"
                      inputMode="tel"
                      defaultValue={state.values.phone}
                      error={state.errors.phone}
                    />
                    <Field
                      name="company"
                      label="Company name"
                      placeholder="Tucker & Sons Plumbing"
                      autoComplete="organization"
                      defaultValue={state.values.company}
                      error={state.errors.company}
                      className="sm:col-span-2"
                    />
                    <Field
                      name="area"
                      label="Service area"
                      placeholder="Austin, TX + zips 78704, 78745, 78748"
                      hint="City, region, or the zip codes you cover."
                      defaultValue={state.values.area}
                      error={state.errors.area}
                      className="sm:col-span-2"
                    />
                  </div>

                  <SubmitButton />

                  <p className="mt-3 text-center text-xs text-ink-muted">
                    No contract. No spam. We use your number to text you back &mdash; that&rsquo;s it.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PromiseLine({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <StaggerItem as="li" className="flex items-start gap-3 text-ink">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-water-50 text-water-700">
        {icon}
      </span>
      <span className="text-sm leading-relaxed">{children}</span>
    </StaggerItem>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  defaultValue,
  error,
  hint,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  defaultValue?: string;
  error?: string;
  hint?: string;
  className?: string;
}) {
  const id = `lead-${name}`;
  const errId = `${id}-error`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        defaultValue={defaultValue}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errId : undefined}
        className={`mt-1.5 block w-full rounded-xl border bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-muted/70 transition focus:outline-none focus:ring-4 ${
          error
            ? "border-alarm-500 focus:border-alarm-500 focus:ring-alarm-500/20"
            : "border-ink/12 focus:border-water-500 focus:ring-water-500/20"
        }`}
      />
      {error ? (
        <p id={errId} className="mt-1.5 text-xs font-medium text-alarm-500">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <Spinner />
          Sending&hellip;
        </>
      ) : (
        <>
          Get My 10-Minute Leak Check
          <ArrowRightIcon className="h-4 w-4" />
        </>
      )}
    </button>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SuccessPanel({ name }: { name: string }) {
  const firstName = name.split(/\s+/)[0] || "there";
  return (
    <div className="p-8 md:p-10">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-500 text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf-600">
          Got it
        </p>
      </div>
      <h3 className="mt-5 font-display text-3xl font-black leading-tight text-ink">
        Thanks, {firstName}. We&rsquo;ll text you within a business hour.
      </h3>
      <p className="mt-4 text-ink-muted">
        We&rsquo;ll send a short text to confirm your service area and book
        a 30-minute setup call. From there your 30-day protected run starts.
      </p>
      <div className="mt-6 rounded-2xl border border-leaf-500/25 bg-leaf-500/[0.06] p-4 text-sm text-ink">
        <p className="font-semibold text-leaf-600">What happens next</p>
        <ol className="mt-2 space-y-1.5 text-ink-muted">
          <li>1. We text you to confirm the right number to put WaterLine behind.</li>
          <li>2. 30-minute setup call to build your rule sheet.</li>
          <li>3. Your line goes live the same day. First text usually lands within hours.</li>
        </ol>
      </div>
    </div>
  );
}
