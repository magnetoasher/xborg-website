import { AboutUsReducer } from "./redux/aboutUs/reducers";
import { SiteReducer } from "./redux/site/reducers";
import { SeedReducer } from "./redux/seed/reducers";

import { AboutUsInterface } from "./redux/aboutUs/types";
import { SiteInterface } from "./redux/site/types";
import { SeedInterface } from "./redux/seed/types";

export interface GlobalState {
  site: SiteInterface;
  aboutUs: AboutUsInterface;
  seed: SeedInterface;
}

export default {
  aboutUs: AboutUsReducer,
  site: SiteReducer,
  seed: SeedReducer,
};
