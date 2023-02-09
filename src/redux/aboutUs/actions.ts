import axios from "axios";
import { GET_TOTAL_USERS } from "./types";

const ActionCreators = {
  getTotalUsers: () => ({
    type: GET_TOTAL_USERS,
    payload: axios.get("https://gaming.xborg.com/api/analytics/totalusers"),
  }),
};

export { ActionCreators as AboutUsActions };
