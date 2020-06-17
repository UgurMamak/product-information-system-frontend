import { combineReducers } from "redux";
//Category
import CategoryReducer from "./category/categoryReducer"
import DeleteCategoryReducer from "./category/deleteCategoryReducer"
import SaveCategoryReducer from "./category/saveCategoryReducer"
//ProductCart
import ProductCartReducer from "./product-cart/productCartReducer"
//Comment
import CommentReducer from "./comment/commentReducer" 

//commentLike
import CommentLikeReducer from "./comment-like/commentLikeReducer"

//Product
import ProductReducer from "./product/productReducer"
import ProductUpdateReducer from "./product/productUpdateReducer"

//ProductLike
import LikeReducer from "./like-product/likeReducer"

//ProductPoint
import ProductPointReducer from "./product-point/productPointReducer"

//ProductType
import ProductTypeReducer from "./product-type/productTypeReducer"
import DeleteTypeReducer from "./product-type/deleteTypeReducer"
import SaveTypeReducer from "./product-type/saveTypeReducer"

//Login
import LoginReducer from "./user/loginReducer"
import RegisterReducer from "./user/registerReducer"

//User
import UserReducer from "./user/userReducer"
import UpdateUserReducer from "./user/updateuserReducer"

//Contact
import ContactReducer from "./contact/contactReducer"

const rootReducer = combineReducers({
    CategoryReducer,
    DeleteCategoryReducer,
    SaveCategoryReducer,

    ProductCartReducer,
    ProductReducer,
    ProductUpdateReducer,

    LikeReducer,
    
    CommentReducer,
    ProductPointReducer,
    CommentLikeReducer,

    ProductTypeReducer,
    DeleteTypeReducer,
    SaveTypeReducer,


    LoginReducer,
    RegisterReducer,
    UserReducer,
    UpdateUserReducer,

    ContactReducer
    
   
});

export default rootReducer;