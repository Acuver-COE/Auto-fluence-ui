import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// const appTokenPersistConfig = {
//   key: "appToken",
//   storage: storage,
//   blacklist: ["loading"],
// };

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });
export default createRootReducer;