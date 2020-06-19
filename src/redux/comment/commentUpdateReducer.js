import { actionTypes } from "./commentActions";

const initialState = {
  message: "",
  updateStatus: -1,
};
export default function CommentUpdateReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_COMMENT_SUCCESS:
      return {
        message: action.payload,
        updateStatus: 1,
      };

    case actionTypes.UPDATE_COMMENT_FAIL:
      return {
        message: action.payload,
        updateStatus: 0,
      };

    default:
      return state;
  }
}
