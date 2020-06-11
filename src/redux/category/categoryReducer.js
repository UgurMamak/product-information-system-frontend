import { actionTypes } from "./categoryActions";
const initialState = {
  categories: [],
};
export default function CategoryReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {categories:action.payload};
    default:
      return state;
  }
}
