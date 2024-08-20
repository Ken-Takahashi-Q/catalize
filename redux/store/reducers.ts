import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "../reducers/globalReducer";

const rootReducer = combineReducers({
  // orders: ordersReducer,
  globalState: globalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
