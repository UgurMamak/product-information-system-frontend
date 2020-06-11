import { combineReducers } from "redux";
//Category
import CategoryReducer from "./category/categoryReducer"


//Product
import ProductCartReducer from "./product-cart/productCartReducer"

const rootReducer = combineReducers({
    CategoryReducer,
    ProductCartReducer
});

export default rootReducer;