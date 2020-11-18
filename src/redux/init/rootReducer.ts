import { combineReducers } from "redux";

//import { cityReducer as city } from "redux/bus/city/reducer";

export const rootReducer = combineReducers({ main: (store) => store });

export type AppState = ReturnType<typeof rootReducer>;
