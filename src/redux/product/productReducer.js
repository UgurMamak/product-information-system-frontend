import { actionTypes } from "./productActions";

const initialState = {
  productDetail: [],

  message: "",
  createStatus: -1,
  deleteStatus: -1,
  updateStatus:-1
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

    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return {
        message: action.payload,
        createStatus: 1,
      };
    case actionTypes.CREATE_PRODUCT_FAIL:
      return {
        message: action.payload,
        createStatus: 0,
      };

    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        message: action.payload,
        deleteStatus: 1,
      };

    case actionTypes.DELETE_PRODUCT_FAIL:
      return {
        message: action.payload,
        createStatus: 0,
      };
    default:
      return state;
  }
}
