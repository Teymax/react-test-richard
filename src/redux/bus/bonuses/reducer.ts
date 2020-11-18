import {
  BonusesState,
  SET_LOADING,
  SET_ERROR,
  SET_BONUSES,
  BonusesActionTypes,
} from "./types";

const initialState: BonusesState = {
  bonuses: [],
  loading: false,
  error: null,
};

export const bonusesReducer = (
  state = initialState,
  action: BonusesActionTypes
): BonusesState => {
  switch (action.type) {
    case SET_BONUSES:
      return {
        ...state,
        bonuses: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
