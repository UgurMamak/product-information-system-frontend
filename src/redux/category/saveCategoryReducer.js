import { actionTypes } from "./categoryActions";
const initialState = {
  saveCategoryStatus: -1,
  message:""
};
export default function SaveCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_CATEGORY_SUCCESS:
      return {
        message:action.payload,
         saveCategoryStatus: 1 };

    case actionTypes.SAVE_CATEGORY_FAIL:
      return {message:action.payload, saveCategoryStatus: 0 };

    default:
      return state;
  }
}
