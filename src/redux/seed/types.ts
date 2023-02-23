const GET_SEED = "reducers/seed/GET_SEED";
const GET_SEED_FULFILLED = "reducers/seed/GET_SEED_FULFILLED";
const GET_SEED_REJECTED = "reducers/seed/GET_SEED_REJECTED";
export { GET_SEED, GET_SEED_FULFILLED, GET_SEED_REJECTED };

export interface SeedInterface {
  data: SeedDataRowType[];
}

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
