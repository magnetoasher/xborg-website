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

export const formatNumberToK = (num: number, digits: number): string => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};
