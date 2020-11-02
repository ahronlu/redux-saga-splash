import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import imagesReducer from "./imagesReducer";
import pageReducer from "./pageReducer";
import statsReducer from "./statsReducer";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  images: imagesReducer,
  nextPage: pageReducer,
  imageStats: statsReducer,
});

export default rootReducer;
