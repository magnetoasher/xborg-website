import { Dispatch, SetStateAction } from 'react';

export const handleResponseErrors = (
  err: any,
  fallback: string,
  setErrors?: Dispatch<SetStateAction<any>>,
) => {
  if (err.inner && setErrors) {
    let errors = {};
    err.inner?.map((x: any) => (errors[x.path as keyof Object] = x.message));

    setErrors?.(errors);
  } else {
    // const error = err?.response?.data?.name;
    // if (err.response?.data?.name) {
    //   toast(i18n(`errors:globalErrors.${error}`));
    // } else {
    // toast(i18n(`errors:globalErrors.${fallback}`));
    // }
  }
};
