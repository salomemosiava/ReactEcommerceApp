import * as yup from "yup";

export const loginFormValidationSchema = yup.object({
  email: yup.string().email("wrong email fromat"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "Last Name should be at least 8 characters")
    .max(20, "first Name should be at most 20 characters"),
});
