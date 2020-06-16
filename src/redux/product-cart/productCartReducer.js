import { actionTypes } from "./productCartActions";
const initialState = {
  popularProduct: [],

  delPCategoryStatus:-1
};
export default function ProductCartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POPULARCART_SUCCESS:
      return {
        popularProduct: action.payload,
      };

    case actionTypes.GET_PRODUCTCART_SUCCESS:
      return {
        popularProduct: action.payload,
      };
 
    case actionTypes.GET_USERCART_SUCCESS:
      return {
        popularProduct: action.payload,
      };


      case actionTypes.DELETE_PRODUCTCATEGORY_SUCCESS:
      return {
        popularProduct: action.payload,
        delPCategoryStatus:1
      };
      case actionTypes.DELETE_PRODUCTCATEGORY_FAIL:
        return {
          popularProduct: action.payload,
          delPCategoryStatus:0
        };
      

    default:
      return state;
  }
}
