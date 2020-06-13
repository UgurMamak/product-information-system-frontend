import { actionTypes } from "./commentActions";
const initialState = {
  message: null,
  successfulComment: -1,
};
export default function CommentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        successfulComment:1,
        messsage:action.payload
      };
      case actionTypes.CREATE_COMMENT_FAIL:
        return {
          successfulComment:0,
          messsage:action.payload
        };
    default:
      return state;
  }
}
