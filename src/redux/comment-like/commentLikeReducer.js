import { actionTypes } from "./commentLikeActions";
const initialState = {
  //message: 0,
  commentLikeValue: {},
  status:-1
};
export default function CommentLikeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_COMMENTLIKE_SUCCESS:
      console.log("ADD_LIKE_POST_SUCCESS reducera geldi", action.payload);
      return {
        ...state, 
        commentLikeValue: action.payload,
        status:1
      };
      /*
    case actionTypes.GET_COMMENTLIKE_SUCCESS:
      console.log("GET_LIKE_POST_SUCCESS reducera geldi", action.payload); 
      return {
        ...state,
        commentLikeValue: action.payload,
        status:-1
      };*/
/*
      case actionTypes.RESET_STATUS:
        return {
          ...state,
          status:-1
        };*/
      
    default:
      return state;
  }
}
