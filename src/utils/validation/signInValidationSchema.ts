import * as yup from "yup";
export const awsSignInSchema = yup.object().shape({
  username: yup.string().required("Username"),
  temporaryPassword: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});
