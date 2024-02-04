import * as yup from "yup";

export const signupValidationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(3, "First Name should be at least 3 characters")
    .max(50, "first Name should be at most 50 characters"),
  lastName: yup
    .string()
    .required("last name is required")
    .min(3, "Last Name should be at least 3 characters")
    .max(50, "first Name should be at most 50 characters"),
  email: yup.string().email("wrong email address"),
  password: yup
    .string()
    .required()
    .min(8, "Last Name should be at least 8 characters")
    .max(20, "first Name should be at most 20 characters"),
});
