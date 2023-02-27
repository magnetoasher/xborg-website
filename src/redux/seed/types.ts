const GET_SEED = "reducers/seed/GET_SEED";
const GET_SEED_FULFILLED = "reducers/seed/GET_SEED_FULFILLED";
const GET_SEED_REJECTED = "reducers/seed/GET_SEED_REJECTED";
const SEND_SEED = "reducers/seed/SEND_SEED";
const SEND_SEED_FULFILLED = "reducers/seed/SEND_SEED_FULFILLED";
const SEND_SEED_REJECTED = "reducers/seed/SEND_SEED_REJECTED";
export {
  GET_SEED,
  GET_SEED_FULFILLED,
  GET_SEED_REJECTED,
  SEND_SEED,
  SEND_SEED_FULFILLED,
  SEND_SEED_REJECTED,
};

export interface SeedInterface {
  data?: SeedDataRowType[];
  summary?: SeedSummaryType;
}

export type SeedSummaryType = {
  nbSubmissions: number;
  summary: SeedSummaryRowType[];
  totalCapital: number;
};

export type SeedSummaryRowType = {
  date: string;
  count: number;
  total: number;
  compounded: number;
};

export type SeedDataRowType = {
  capital: number;
  index: string;
  timestamp: number;
};

export type SeedDataRowMappedType = {
  capital: number;
  index: string;
  date: string;
};
