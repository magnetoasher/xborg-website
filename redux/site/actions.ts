import { SiteActionTypes } from './types';

const ActionCreators = {
  loadSite: () => ({
    type: SiteActionTypes.LOAD_SITE,
    payload: true,
  }),
};

export { ActionCreators as SiteActions };
