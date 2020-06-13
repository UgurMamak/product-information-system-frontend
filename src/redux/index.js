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


const rootReducer = combineReducers({
    CategoryReducer,
    ProductCartReducer,
    ProductReducer,
    CommentReducer,
    ProductPointReducer,
    CommentLikeReducer
   
});

export default rootReducer;