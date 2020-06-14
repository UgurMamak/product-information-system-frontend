import { actionTypes } from "./productCartActions";
const initialState = {

  popularProduct:[], 
};
export default function ProductCartReducer(state = initialState, action) {
  switch (action.type) {
      case actionTypes.GET_POPULARCART_SUCCESS: 
      return {
       popularProduct:action.payload,
      };

      case actionTypes.GET_PRODUCTCART_SUCCESS: 
      return {
       popularProduct:action.payload,
      };
      
    default:
      return state;
  }
}
