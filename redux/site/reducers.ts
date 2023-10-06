import { createReducer } from '@reduxjs/toolkit';

import { GlobalState } from '../../reducer';
import { SiteActionTypes, SiteInterface } from './types';

interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

const initialState: SiteInterface = {
  loaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(
    SiteActionTypes.LOAD_SITE,
    (state, actions: Action<SiteActionTypes, any>) => ({
      ...state,
      loaded: actions.payload,
    }),
  );
});

export const selectSite = (state: GlobalState) => state.site;

export { reducer as SiteReducer };
