import { actionTypes } from "./userActions";

const initialState = {
  loginStatus: -1,
  message: "",
  loginData:[]
};

export default function LoginUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_LOGIN_SUCCESS:
      return {
        loginStatus: 1,
        message: "",
        loginData:action.payload
      }; 

    case actionTypes.FAIL_LOGIN:
      return {
        loginStatus: 0,
        message: action.payload,
        loginData:action.payload
      };

    case actionTypes.RESET_LOGIN:
      return {
        loginStatus: -1,
        message: "",
        loginData:[]
      };

    default:
      return state;
  }
}
