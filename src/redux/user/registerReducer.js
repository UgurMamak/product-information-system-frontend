import { actionTypes } from "./userActions";

const initialState = {
  registerStatus: -1,
  message: "",
};

export default function LoginUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_REGISTER_SUCCESS:
      return {
        registerStatus: 1,
        message: "",
      };

    case actionTypes.FAIL_REGISTER:
      return {
        registerStatus: 0,
        message: action.payload,
      };

    case actionTypes.RESET_REGISTER:
      return {
        registerStatus: -1,
        message: "",
      };

    default:
      return state;
  }
}
