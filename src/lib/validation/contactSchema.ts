import * as yup from "yup";

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export const contactSchema: yup.ObjectSchema<IContactForm> = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});
