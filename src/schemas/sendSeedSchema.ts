import * as yup from "yup";

export const sendSeedSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  isPrometheusOwner: yup.boolean().required(),
  capital: yup.number().required(),
  how: yup.string().required(),
});
