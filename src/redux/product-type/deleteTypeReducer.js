import { actionTypes } from "./productTypeActions";
const initialState = {
  deleteTypeStatus: -1,
};
export default function DeleteTypeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCTYPE_SUCCESS:
      return { deleteTypeStatus: 1 };

    case actionTypes.DELETE_PRODUCTYPE_FAIL:
      return { deleteTypeStatus: 0 };

    default:
      return state;
  }
}
