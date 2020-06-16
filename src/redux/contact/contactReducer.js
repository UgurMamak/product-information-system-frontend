import { actionTypes } from "./contactActions";
const initialState = {
  message: "",
  contactStatus: -1,
};

export default function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_MAIL_SUCCESS:
      return {
        message: action.payload,
        contactStatus: 1,
      };
    case actionTypes.CREATE_MAIL_FAIL:
      return {
        message: action.payload,
        contactStatus: 0,
      };
    default:
      return state;
  }
}
