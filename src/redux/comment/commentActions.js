import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
const CREATE_COMMENT_FAIL = "CREATE_COMMENT_FAIL";
export const actionTypes = { CREATE_COMMENT_SUCCESS,CREATE_COMMENT_FAIL };


export function createCommentSuccess(comment) {
    return { type: actionTypes.CREATE_COMMENT_SUCCESS, payload: comment };
  }
  export function createCommentFail(comment) {
    return { type: actionTypes.CREATE_COMMENT_FAIL, payload: comment };
  }
  export function createComment(comment) {
    return function (dispatch) {
      let url = API + "comment/add";
      axios
        .post(url, comment)
        .then((response) => response.data)
        .then((result) => {
          dispatch(createCommentSuccess(result));
        })
        .catch((error) => {
            if (error.response.data.status)
          dispatch(createCommentFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(createCommentFail(error.response.data));
          console.log("COMMENT EKLEMEDE HATA");
        });
    };
  }