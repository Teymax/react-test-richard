import {
  SET_LOADING,
  SET_ERROR,
  SET_BONUSES,
  BonusesActionTypes,
} from "./types";
import { ThunkAction } from "redux-thunk";
import { AppState } from "redux/init/rootReducer";
import { Action } from "redux";
import { API } from "api";
import { createBonusesArray } from "redux/helpers";
import { Bonus } from "sharedTypes";

const setBonuses = (payload: Bonus[]): BonusesActionTypes => ({
  type: SET_BONUSES,
  payload,
});

const setLoading = (payload: boolean): BonusesActionTypes => ({
  type: SET_LOADING,
  payload,
});

const setError = (payload: null | string): BonusesActionTypes => ({
  type: SET_ERROR,
  payload,
});

export const fetchBonuses = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const res = await API.bonuses();
    if (!res) throw new Error(res);
    dispatch(setBonuses(createBonusesArray(res)));
    dispatch(setLoading(false));
  } catch (err) {}
};
