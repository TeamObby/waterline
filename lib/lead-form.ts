export type LeadFormState = {
  ok: boolean;
  errors: Partial<
    Record<"name" | "phone" | "company" | "area" | "form", string>
  >;
  values: { name: string; phone: string; company: string; area: string };
};

export const emptyLeadState: LeadFormState = {
  ok: false,
  errors: {},
  values: { name: "", phone: "", company: "", area: "" },
};
