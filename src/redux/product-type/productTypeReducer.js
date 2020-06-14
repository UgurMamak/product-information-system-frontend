import { actionTypes } from "./productTypeActions";
const initialState = {
  productType: [],
};
export default function ProductTypeReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTYPE_SUCCESS:
      return {productType:action.payload};
    default:
      return state;
  }
}
