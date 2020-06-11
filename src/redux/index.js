import { combineReducers } from "redux";
//Category
import CategoryReducer from "./category/categoryReducer"


//ProductCart
import ProductCartReducer from "./product-cart/productCartReducer"

//Product
import ProductReducer from "./product/productReducer"

const rootReducer = combineReducers({
    CategoryReducer,
    ProductCartReducer,
    ProductReducer
});

export default rootReducer;