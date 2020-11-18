import { Bonus } from "sharedTypes";

export type BonusesState = {
  bonuses: Bonus[];
  loading: boolean;
  error: null | string;
};

export const SET_BONUSES = "@BONUSES/SET_BONUSES";
type SetBonuses = {
  type: typeof SET_BONUSES;
  payload: Bonus[];
};

export const SET_LOADING = "@BONUSES/SET_LOADING";
type SetLoading = {
  type: typeof SET_LOADING;
  payload: boolean;
};

export const SET_ERROR = "@BONUSES/SET_ERROR";
type SetError = {
  type: typeof SET_ERROR;
  payload: null | string;
};

export type BonusesActionTypes = SetLoading | SetError | SetBonuses;
