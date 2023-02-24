import { Dispatch, SetStateAction } from "react";
import { closest, handleErrors } from "../helpers/inputs";
import { SeedFormType } from "../modules";
import { SeedActions } from "../redux/seed/actions";
import { sendSeedSchema } from "../schemas/sendSeedSchema";
import { AppDispatch } from "../store";

const yupOptions = { abortEarly: false };

export class SeedViewModel {
  constructor(private dispatch: AppDispatch) {}
  sendSeed(
    form: SeedFormType,
    setForm: Dispatch<SetStateAction<SeedFormType>>,
    setErrors: Dispatch<any>
  ) {
    sendSeedSchema
      .validate(form, yupOptions)
      .then(() => {
        setForm({
          name: "",
          email: "",
          isPrometheusOwner: true,
          capital: 0,
          how: "",
        });
        this.dispatch(SeedActions.sendSeed(form));
      })
      .catch((err) => handleErrors(err, setErrors));
  }

  getSlideValue(value: number): number {
    const counts = [0, 200, 350, 600, 720, 1000, 1100];
    const replacement = [500, 1000, 2000, 5000, 10000, 20000, 50000];
    const closestValue = closest(value, counts);

    switch (closestValue) {
      case counts[0]:
        return replacement[0];
      case counts[1]:
        return replacement[1];
      case counts[2]:
        return replacement[2];
      case counts[3]:
        return replacement[3];
      case counts[4]:
        return replacement[4];
      case counts[5]:
        return replacement[5];
      case counts[6]:
        return replacement[6];
      default:
        return replacement[0];
    }
  }

  findRowByDate(data: any[], label: string) {
    if (!data?.length) return null;

    const row = data.find((item: any) => item.date == label);

    return row;
  }
}
