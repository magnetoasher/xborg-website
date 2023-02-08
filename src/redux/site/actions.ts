import { LOADED } from "./types";

const ActionCreators = {
  loadSite: () => ({
    type: LOADED,
  }),
};

export { ActionCreators as SiteActions };
