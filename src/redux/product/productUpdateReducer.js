import { actionTypes } from "./productActions";

const initialState = {
  message: "",
  updateStatus:-1
};
export default function ProductUpdateReducer(state = initialState, action) {
  switch (action.type) {
    

      case actionTypes.UPDATE_PRODUCT_SUCCESS:
        return {
          message: action.payload,
          updateStatus: 1,
        };

      case actionTypes.UPDATE_PRODUCT_FAIL:
      return {
        message: action.payload,
        updateStatus: 0,
      };

    default:
      return state;
  }
}
