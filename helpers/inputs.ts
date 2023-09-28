import { Dispatch, SetStateAction } from 'react';

export const updateInput =
  (
    key: string,
    form: Object,
    setForm: Dispatch<SetStateAction<any>>,
    errors?: Object,
    setErrors?: Dispatch<SetStateAction<any>>,
  ) =>
  (value: string | number | boolean) => {
    setForm({
      ...form,
      [key]: value,
    });

    if (errors?.[key as keyof Object])
      setErrors?.({
        ...errors,
        [key]: undefined,
      });
  };

export const randomIntFromInterval = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const toSnakeCase = (string: string): string => {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_');
};
