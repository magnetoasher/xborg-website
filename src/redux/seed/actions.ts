import axios from "axios";
import { GET_SEED } from "./types";

const ActionCreators = {
  getSeed: () => ({
    type: GET_SEED,
    payload: axios.get("https://gaming.xborg.com/api/seed/get"),
  }),
};

export { ActionCreators as SeedActions };
