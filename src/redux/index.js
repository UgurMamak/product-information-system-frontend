import { combineReducers } from "redux";
//Category
import CategoryReducer from "./category/categoryReducer"

//ProductCart
import ProductCartReducer from "./product-cart/productCartReducer"
//Comment
import CommentReducer from "./comment/commentReducer" 

//commentLike
import CommentLikeReducer from "./comment-like/commentLikeReducer"

//Product
import ProductReducer from "./product/productReducer"

//ProductPoint
import ProductPointReducer from "./product-point/productPointReducer"

//ProductType
import ProductTypeReducer from "./product-type/productTypeReducer"

//Login
import LoginReducer from "./user/loginReducer"
import RegisterReducer from "./user/registerReducer"

//User
import UserReducer from "./user/userReducer"

const rootReducer = combineReducers({
    CategoryReducer,
    ProductCartReducer,
    ProductReducer,
    CommentReducer,
    ProductPointReducer,
    CommentLikeReducer,
    ProductTypeReducer,
    LoginReducer,
    RegisterReducer,
    UserReducer
   
});

export default rootReducer;