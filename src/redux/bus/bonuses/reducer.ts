import {
  BonusesState,
  SET_LOADING,
  SET_ERROR,
  SET_BONUSES,
  SET_BONUS_ACTIVATION,
  SET_FILTER,
  BonusesActionTypes,
} from "./types";

const initialState: BonusesState = {
  bonuses: [],
  filter: "",
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

    case SET_BONUS_ACTIVATION:
      const updatedBonuses = state.bonuses.map((bonus) => {
        if (bonus.title === action.payload.title) {
          return { ...bonus, activated: action.payload.isActivated };
        }
        return bonus;
      });

      return {
        ...state,
        bonuses: updatedBonuses,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
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
