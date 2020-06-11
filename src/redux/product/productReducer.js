import { actionTypes } from "./productActions";

const initialState = {
  productDetail: [],
};
export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTDETAIL_SUCCESS:
      return {
        productDetail: action.payload,
      };
    case actionTypes.GET_POSTDETAIL_FAIL:
      return {
        productDetail: action.payload,
      };

    default:
      return state;
  }
}
