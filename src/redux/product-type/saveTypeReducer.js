import { actionTypes } from "./productTypeActions";
const initialState = {
  saveTypeStatus: -1,
  message: "",
};
export default function SaveTypeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_PRODUCTYPE_SUCCESS:
      return { saveTypeStatus: 1, message: action.payload };

    case actionTypes.SAVE_PRODUCTYPE_FAIL:
      return { saveTypeStatus: 0, message: action.payload };

    default:
      return state;
  }
}
