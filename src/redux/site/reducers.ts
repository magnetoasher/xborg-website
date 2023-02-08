import { Action } from "redux";
import { LOADED, SiteInterface } from "./types";

const initialState: SiteInterface = {
  loaded: false,
};

const Reduction = {
  load: (state = initialState, data: { type: string }) => {
    switch (data.type) {
      case LOADED:
        return {
          loaded: true,
        };

      default:
        return state;
    }
  },
};

const createReducer =
  <S = object>(initialState: S, handlers: any | Action<any>) =>
  (state = initialState, action: any) => {
    const { type } = action;
    if (!handlers.hasOwnProperty(type)) {
      return state;
    }

    return handlers[type](state, action);
  };

const reducer = createReducer(initialState, {
  [LOADED]: Reduction.load,
});

export { reducer as SiteReducer };
