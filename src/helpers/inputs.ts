import { Dispatch, SetStateAction } from "react";

export const updateInput =
  (
    key: string,
    form: Object,
    setForm: Dispatch<SetStateAction<any>>,
    errors: Object,
    setErrors: Dispatch<SetStateAction<any>>
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
  setErrors: Dispatch<SetStateAction<any>>
) => {
  let errors = {};
  err.inner?.map((x: any) => (errors[x.path as keyof Object] = x.message));

  setErrors(errors);
};

export const closest = (num: number, arr: number[]) => {
  var curr = arr[0];
  var diff = Math.abs(num - curr);
  for (var val = 0; val < arr.length; val++) {
    var newdiff = Math.abs(num - arr[val]);
    if (newdiff < diff) {
      diff = newdiff;
      curr = arr[val];
    }
  }
  return curr;
};
