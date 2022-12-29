import { combineReducers } from "redux";
import {
  setCategoryReducer,
  setProductReducer,
  setAddCartReducer,
  setDetailsReducer,
  setAllProductsReducer,
  setWishReducer,
  setSearchReducer,
  setAllProductReducer,
  setIncDecReducer,
  setOrderItemReducer,
  setAddressReducer,
  setLoginReducer,
  setHomeDesignDetailsReducer,
} from "./UserReducers";
const reducers = combineReducers({
  TotalProduct: setAllProductsReducer,
  AllCategory: setCategoryReducer,
  AllProduct: setProductReducer,
  AllCart: setAddCartReducer,
  AllDetail: setDetailsReducer,
  AllWishData: setWishReducer,
  SearchData: setSearchReducer,
  ProductCategory: setAllProductReducer,
  IncDec: setIncDecReducer,
  Order: setOrderItemReducer,
  Address: setAddressReducer,
  LoginData: setLoginReducer,
  designDetails: setHomeDesignDetailsReducer,
});
export default reducers;
