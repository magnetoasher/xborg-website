import { AboutUsReducer } from "./redux/aboutUs/reducers";
import { SiteReducer } from "./redux/site/reducers";

import { AboutUsInterface } from "./redux/aboutUs/types";
import { SiteInterface } from "./redux/site/types";

export interface GlobalState {
  site: SiteInterface;
  aboutUs: AboutUsInterface;
}

export default {
  aboutUs: AboutUsReducer,
  site: SiteReducer,
};
