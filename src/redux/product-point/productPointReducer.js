import { actionTypes } from "./productPointActions";
const initialState = {
  //message: 0,
  pointValue: {},
  status: -1,
};

export default function ProductPointReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTPOINT_SUCCESS:
      return {
        ...state,
        pointValue: action.payload,
        status: 1,
      };
    case actionTypes.GET_PRODUCTPOINT_SUCCESS:
      return {
        ...state,
        pointValue: action.payload,
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
