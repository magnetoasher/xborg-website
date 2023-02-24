import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { handleErrors } from "../helpers/inputs";
import { SeedFormType } from "../modules";
import { SeedActions } from "../redux/seed/actions";
import { sendSeedSchema } from "../schemas/sendSeedSchema";
import { AppDispatch } from "../store";

const yupOptions = { abortEarly: false };

export class SeedViewModel {
  constructor(private dispatch: AppDispatch) {}
  followersMarks = [
    {
      value: 25,
      scaledValue: 500,
    },
    {
      value: 50,
      scaledValue: 1000,
    },
    {
      value: 75,
      scaledValue: 2000,
    },
    {
      value: 100,
      scaledValue: 5000,
    },
    {
      value: 125,
      scaledValue: 10000,
    },
    {
      value: 150,
      scaledValue: 20000,
    },
    {
      value: 175,
      scaledValue: 500000,
    },
    {
      value: 200,
      scaledValue: 1000000,
    },
  ];
  sendSeed(
    form: SeedFormType,
    setForm: Dispatch<SetStateAction<SeedFormType>>,
    setErrors: Dispatch<any>
  ) {
    sendSeedSchema
      .validate(form, yupOptions)
      .then(async () => {
        await this.dispatch(SeedActions.sendSeed(form));

        setForm({
          name: "",
          email: "",
          isPrometheusOwner: true,
          capital: 0,
          how: "",
        });
        toast.success("Form succesfully sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("Something went wrong! Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleErrors(err, setErrors);
      });
  }

  findRowByDate(data: any[], label: string) {
    if (!data?.length) return null;

    const row = data.find((item: any) => item.date == label);

    return row;
  }

  scaleSlider = (value: number) => {
    const previousMarkIndex = Math.floor(value / 25);
    const previousMark = this.followersMarks[previousMarkIndex];
    const remainder = value % 25;
    if (remainder === 0) {
      return previousMark.scaledValue;
    }
    const nextMark = this.followersMarks[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
    return remainder * increment + previousMark.scaledValue;
  };
}
