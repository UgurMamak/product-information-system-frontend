import { actionTypes } from "./categoryActions";
const initialState = {
  deleteCategoryStatus: -1,
};
export default function DeleteCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return { deleteCategoryStatus: 1 };

    case actionTypes.DELETE_CATEGORY_FAIL:
      return { deleteCategoryStatus: 0 };

    default:
      return state;
  }
}
