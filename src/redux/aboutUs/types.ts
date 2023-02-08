import { TileType } from "../../components/Tile";

const GET_TEAM = "reducers/aboutUs/GET_TEAM";
const GET_TEAM_FULFILLED = "reducers/aboutUs/GET_TEAM_FULFILLED";
const GET_TEAM_REJECTED = "reducers/aboutUs/GET_TEAM_REJECTED";

export { GET_TEAM, GET_TEAM_FULFILLED, GET_TEAM_REJECTED };

export enum STATUS_TYPE {
  FULFILLED = "FULFILLED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  UNINITIALIZED = "UNINITIALIZED",
}

export interface AboutUsInterface {
  team: TileType[];
  players: SinglePlayerType[];
  passportSigns: number;
  tournamentsOrganized: number;
  prizesPaid: number;
  participants: number;
  tournamentsWon: number;
  tournamentWinning: number;
  status: STATUS_TYPE;
}

export type SinglePlayerType = {
  image: string;
  name: string;
  description: string;
};
