import { Action } from "redux";
import {
  AboutUsInterface,
  GET_TOTAL_USERS,
  GET_TOTAL_USERS_FULFILLED,
  GET_TOTAL_USERS_REJECTED,
  STATUS_TYPE,
} from "./types";

const initialState: AboutUsInterface = {
  totalUsers: 4000,
  status: STATUS_TYPE.UNINITIALIZED,
};

const Reduction = {
  users: (state = initialState, data: { type: string; payload: any }) => {
    switch (data.type) {
      case GET_TOTAL_USERS_FULFILLED:
        return {
          ...state,
          totalUsers: data.payload.data.totalUsers,
          status: STATUS_TYPE.FULFILLED,
        };
      case GET_TOTAL_USERS_REJECTED:
        return {
          ...state,
          status: STATUS_TYPE.REJECTED,
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
  [GET_TOTAL_USERS_FULFILLED]: Reduction.users,
});

export { reducer as AboutUsReducer };
