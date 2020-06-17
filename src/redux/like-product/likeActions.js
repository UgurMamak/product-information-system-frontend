import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const ADD_LIKEPRODUCT_SUCCESS = "ADD_LIKEPRODUCT_SUCCESS";
const GET_LIKEPRODUCT_SUCCESS = "GET_LIKEPRODUCT_SUCCESS";
const RESET_STATUS = "RESET_STATUS";

export const actionTypes = {
    ADD_LIKEPRODUCT_SUCCESS,
    GET_LIKEPRODUCT_SUCCESS,
  RESET_STATUS,
};

export function addLikeSuccess(like) {
  return { type: actionTypes.ADD_LIKEPRODUCT_SUCCESS, payload: like};
}

export function getLikeSuccess(like) {
  return { type: actionTypes.GET_LIKEPRODUCT_SUCCESS, payload: like };
}

export function resetStatus() {
  return { type: actionTypes.RESET_STATUS };
}


export function likeAdd(like) {
  return function (dispatch) {
    let url = API + "like/add";
    axios
      .post(url, like)
      .then((response) => response.data)
      .then((result) => {
        dispatch(addLikeSuccess(result));
      })
      .catch((error) => {
        console.log("LIKE OLAYINDA HATA OLDU");
      });
  };
}


export function getLikeStatus(productId) {
  return function (dispatch) {
    let url = API + "like/getnumberstatus/?productId=" + productId;
    axios
      .get(url)
      .then((result) => {
        dispatch(getLikeSuccess(result.data));
      })
      .catch((error) => {
        console.log("LİKE SAYILARI GELMEDİ", error);
      });
  };
}
