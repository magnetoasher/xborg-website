import * as yup from 'yup';

export const subscribeSchema = yup.object().shape({
  email: yup.string().email().required(),
});
