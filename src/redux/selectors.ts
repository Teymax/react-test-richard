import { AppState } from "redux/init/rootReducer";

export const selectors = {
  header: {
    getBalance: (state: AppState) => state.header.balance,
    getNextPayout: (state: AppState) => state.header.nextPayout,
    getCurrency: (state: AppState) => state.header.currency,
    getLoading: (state: AppState) => state.header.loading,
  },
};
