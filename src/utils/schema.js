import * as yup from "yup";
import { Validation } from "./validation";
export const emailExistSchema = yup.object({
  email: yup
    .string()
    .email(Validation.email.valid)
    .required(Validation.email.required),
});

export const signupSchema = yup.object({
  firstName: yup.string().required(Validation.firstName.required),
  agreeToPrivacyPolicy: yup
    .boolean()
    .oneOf([true], Validation.terms.required)
    .required(Validation.terms.required),
});
