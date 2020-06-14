import { actionTypes } from "./userActions";

const initialState = {
  userStatus: -1,
  userData:[]
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return {
        userStatus: 1,
        userData:action.payload
      };
    default:
      return state;
  }
}
