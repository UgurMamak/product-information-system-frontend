import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const ADD_COMMENTLIKE_SUCCESS = "ADD_COMMENTLIKE_SUCCESS";
//const GET_COMMENTLIKE_SUCCESS = "GET_COMMENTLIKE_SUCCESS";
//const RESET_STATUS = "RESET_STATUS";

export const actionTypes = {
    ADD_COMMENTLIKE_SUCCESS,
    //GET_COMMENTLIKE_SUCCESS
  //RESET_STATUS,
};

export function commentLikeAddSuccess(commentLike) {
  return { type: actionTypes.ADD_COMMENTLIKE_SUCCESS, payload: commentLike };
}
/*
export function getCommentLikeSuccess(commentLike) {
  return { type: actionTypes.GET_COMMENTLIKE_SUCCESS, payload: commentLike };
}*/
/*
export function resetStatus() {
  return { type: actionTypes.RESET_STATUS };
}
*/

export function commentLikeAdd(commentLike) {
  return function (dispatch) {
    let url = API + "comment/commentlike";
    axios
      .post(url, commentLike)
      .then((response) => response.data)
      .then((result) => {
        dispatch(commentLikeAddSuccess(result));
      })
      .catch((error) => {
          console.log("action",error.response.data)
        console.log("COMMENT LIKE OLAYINDA HATA OLDU");
      });
  };
} 

/*
export function getCommentLike(commentId) {
  return function (dispatch) {
    let url = API + "comment/getcommentlike/?commentId=" + commentId;
    axios
      .get(url)
      .then((result) => {
        dispatch(getCommentLikeSuccess(result.data));
      })
      .catch((error) => {
        console.log("COMMENT LİKE SAYILARI GELMEDİ", error);
      });
  };
}
*/