"use server";

import type { LeadFormState } from "@/lib/lead-form";

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const area = String(formData.get("area") ?? "").trim();

  const values = { name, phone, company, area };
  const errors: LeadFormState["errors"] = {};

  if (name.length < 2) errors.name = "Tell us what to call you.";
  if (phone.replace(/\D/g, "").length < 10)
    errors.phone = "Need a 10-digit phone number.";
  if (company.length < 2) errors.company = "What's your shop called?";
  if (area.length < 2) errors.area = "Where do you work? City or ZIPs.";

  if (Object.keys(errors).length) return { ok: false, errors, values };

  // Real wiring (Slack, email, CRM) goes here. Logged for now so the operator
  // can see submissions land while running locally.
  console.log("[waterline lead]", {
    ...values,
    receivedAt: new Date().toISOString(),
  });

  return { ok: true, errors: {}, values };
}
