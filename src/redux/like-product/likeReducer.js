import { actionTypes } from "./likeActions";
const initialState = {
  likeValue: {},
  status: -1,
};
export default function LikeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIKEPRODUCT_SUCCESS:
      console.log("ADD_LIKE_POST_SUCCESS reducera geldi", action.payload);
      return {
        ...state,
        likeValue: action.payload,
        status: 1,
      };
    case actionTypes.GET_LIKEPRODUCT_SUCCESS:
      console.log("GET_LIKE_POST_SUCCESS reducera geldi", action.payload);
      return {
        ...state,
        likeValue: action.payload,
        status: -1,
      };

    case actionTypes.RESET_STATUS:
      return {
        ...state,
        status: -1,
      };

    default:
      return state;
  }
}
