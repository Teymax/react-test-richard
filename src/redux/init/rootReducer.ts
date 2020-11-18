import { combineReducers } from "redux";

import { headerReducer as header } from "redux/bus/header/reducer";

export const rootReducer = combineReducers({ header });

export type AppState = ReturnType<typeof rootReducer>;
