import * as yup from "yup";
import { Validation } from "./validation";
export const emailExistSchema = yup.object({
  email: yup.string().email(Validation.email.valid).required(Validation.email.required),
});
