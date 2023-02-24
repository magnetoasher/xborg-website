import axios from "axios";
import { SeedFormType } from "../../modules";
import { GET_SEED, SEND_SEED } from "./types";

const ActionCreators = {
  getSeed: () => ({
    type: GET_SEED,
    payload: axios.get("https://gaming.xborg.com/api/seed/get"),
  }),
  sendSeed: (form: SeedFormType) => ({
    type: SEND_SEED,
    payload: axios.post("https://gaming.xborg.com/api/seed/post", form),
  }),
};

export { ActionCreators as SeedActions };
