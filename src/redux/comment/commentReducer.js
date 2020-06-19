import { actionTypes } from "./commentActions";
const initialState = {
  message: null,
  successfulComment: -1,
  deleteStatus: -1,
};
export default function CommentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        successfulComment: 1,
        messsage: action.payload,
      };
    case actionTypes.CREATE_COMMENT_FAIL:
      return {
        successfulComment: 0,
        messsage: action.payload,
      };
    case actionTypes.DELETE_COMMENT_SUCCESS:
      return {
        deleteStatus: 1,
        messsage: action.payload,
      };
    case actionTypes.DELETE_COMMENT_FAIL:
      return {
        deleteStatus: 0,
        messsage: action.payload,
      };
    default:
      return state;
  }
}
