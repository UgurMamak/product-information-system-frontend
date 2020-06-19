import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
const CREATE_COMMENT_FAIL = "CREATE_COMMENT_FAIL";

const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAIL = "DELETE_COMMENT_FAIL";

const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
const UPDATE_COMMENT_FAIL = "UPDATE_COMMENT_FAIL";

export const actionTypes = {
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAIL,
};

export function createCommentSuccess(comment) {
  return { type: actionTypes.CREATE_COMMENT_SUCCESS, payload: comment };
}
export function createCommentFail(comment) {
  return { type: actionTypes.CREATE_COMMENT_FAIL, payload: comment };
}

export function deleteCommentSuccess(comment) {
  return { type: actionTypes.DELETE_COMMENT_SUCCESS, payload: comment };
}
export function deleteCommentFail(comment) {
  return { type: actionTypes.DELETE_COMMENT_SUCCESS, payload: comment };
}

export function updateCommentSuccess(comment) {
  return { type: actionTypes.UPDATE_COMMENT_SUCCESS, payload: comment };
}
export function updateCommentFail(comment) {
  return { type: actionTypes.UPDATE_COMMENT_FAIL, payload: comment };
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

//Yorum silme
export function deleteComment(comment) {
  return function (dispatch) {
    let url = API + "comment/delete";
    axios
      .post(url, comment)
      .then((response) => response.data)
      .then((result) => {
        dispatch(deleteCommentSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(deleteCommentFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(deleteCommentFail(error.response.data));
      });
  };
}

//productUpdate
export function updateComment(comment) {
  return function (dispatch) {
    let url = API + "comment/update";
    axios
      .post(url, comment)
      .then((response) => response.data)
      .then((result) => {
        dispatch(updateCommentSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(updateCommentFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(updateCommentFail(error.response.data));
      });
  };
}
