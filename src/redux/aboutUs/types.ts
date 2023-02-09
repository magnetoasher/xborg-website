const GET_TOTAL_USERS = "reducers/aboutUs/GET_TOTAL_USERS";
const GET_TOTAL_USERS_FULFILLED = "reducers/aboutUs/GET_TOTAL_USERS_FULFILLED";
const GET_TOTAL_USERS_REJECTED = "reducers/aboutUs/GET_TOTAL_USERS_REJECTED";

export { GET_TOTAL_USERS, GET_TOTAL_USERS_FULFILLED, GET_TOTAL_USERS_REJECTED };

export enum STATUS_TYPE {
  FULFILLED = "FULFILLED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  UNINITIALIZED = "UNINITIALIZED",
}

export interface AboutUsInterface {
  totalUsers: number;
  status: STATUS_TYPE;
}

export type SinglePlayerType = {
  image: string;
  name: string;
  description: string;
};
