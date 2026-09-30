// Shared shape for the contact form's action state. Kept out of actions.ts
// because a "use server" file may only export async functions.
export type ContactValues = {
  firstName: string; lastName: string; email: string;
  phone: string; relationship: string; tourDate: string; message: string;
};

export type ContactState = {
  status: "idle" | "sent" | "error";
  message: string;
  firstName?: string;
  fieldErrors?: Partial<Record<"firstName" | "lastName" | "email" | "message", string>>;
  /** Echoed back so a failed submit doesn't wipe what the visitor typed. */
  values?: ContactValues;
};

export const initialContactState: ContactState = { status: "idle", message: "" };
