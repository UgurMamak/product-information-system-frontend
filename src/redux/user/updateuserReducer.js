import { actionTypes } from "./userActions";
const initialState = {
  updateStatus: -1,
  message: "",
};
export default function UpdateUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_USER_SUCCESS:
      return { updateStatus: 1, message: action.payload };

    case actionTypes.UPDATE_USER_FAIL:
      return { updateStatus: 0, message: action.payload };

    default:
      return state;
  }
}
