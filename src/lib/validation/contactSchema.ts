import * as yup from "yup";

// ✅ define schema
export const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

// ✅ infer the TypeScript type from the schema
export type IContactForm = yup.InferType<typeof contactSchema>;
