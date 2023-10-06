import { SiteReducer } from './redux/site/reducers';
import { SiteInterface } from './redux/site/types';

export interface GlobalState {
  site: SiteInterface;
}

const reducers = {
  site: SiteReducer,
};

export default reducers;
