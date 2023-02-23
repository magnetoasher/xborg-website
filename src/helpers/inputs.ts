import { Dispatch, SetStateAction } from 'react';

export const updateInput =
  (
    key: string,
    form: Object,
    setForm: Dispatch<SetStateAction<any>>,
    errors: Object,
    setErrors: Dispatch<SetStateAction<any>>,
  ) =>
  (value: string) => {
    setForm({
      ...form,
      [key]: value,
    });

    if (errors[key as keyof Object])
      setErrors({
        ...errors,
        [key]: undefined,
      });
  };

export const handleErrors = (
  err: any,
  setErrors: Dispatch<SetStateAction<any>>,
) => {
  let errors = {};
  err.inner?.map((x: any) => (errors[x.path as keyof Object] = x.message));

  setErrors(errors);
};
