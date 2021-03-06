import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer} from "./redux/reducers/productReducers";
import {addToCartReducer} from "./redux/reducers/cartReducers"

const reducer = combineReducers({
  productList:productListReducer,
  cart:addToCartReducer, 
});

 const cartItemsFromStorage=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]

const initialState = {
  cart:{cartItems:cartItemsFromStorage},
};
const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
