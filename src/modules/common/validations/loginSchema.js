import * as yup from "yup";

const loginSchema = yup.object().shape({
  userName: yup.string().required("This field is required.").default(""),
  password: yup.string().required("This field is required.").default(""),
});

export default loginSchema;
