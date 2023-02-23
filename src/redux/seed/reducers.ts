import { Action } from "redux";
import { GET_SEED_FULFILLED, SeedInterface } from "./types";

const initialState: SeedInterface = {
  data: [],
};

const Reduction = {
  seed: (state = initialState, data: any) => {
    switch (data.type) {
      case GET_SEED_FULFILLED:
        return {
          data: data.payload.data.data,
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
  [GET_SEED_FULFILLED]: Reduction.seed,
});

export { reducer as SeedReducer };
