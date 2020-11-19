import { AppState } from "redux/init/rootReducer";

export const selectors = {
  header: {
    getBalance: (state: AppState) => state.header.balance,
    getNextPayout: (state: AppState) => state.header.nextPayout,
    getCurrency: (state: AppState) => state.header.currency,
    getLoading: (state: AppState) => state.header.loading,
    getError: (state: AppState) => state.header.error,
  },
  bonuses: {
    getBonuses: (state: AppState) => state.bonuses.bonuses,
    getFilter: (state: AppState) => state.bonuses.filter,
    getLoading: (state: AppState) => state.bonuses.loading,
    getError: (state: AppState) => state.bonuses.error,
  },
};
