/* Redux Store
 *
 * author: Jeff Hsu
 */

import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/root-reducer";

const myStore = createStore(
  RootReducer,
  compose(applyMiddleware(thunk))
);

export default myStore;