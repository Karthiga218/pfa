import { combineReducers } from "redux";
import terminalReducer from "./terminalReducer";
import companyReducer from "./companyReducer";

export default combineReducers({
  terminals: terminalReducer,
  companies: companyReducer
});
