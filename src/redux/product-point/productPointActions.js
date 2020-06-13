import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */

const ADD_PRODUCTPOINT_SUCCESS = "ADD_PRODUCTPOINT_SUCCESS";
const GET_PRODUCTPOINT_SUCCESS = "GET_PRODUCTPOINT_SUCCESS";
export const actionTypes = { ADD_PRODUCTPOINT_SUCCESS, GET_PRODUCTPOINT_SUCCESS};

export function productPointAddSuccess(point) {
  return { type: actionTypes.ADD_PRODUCTPOINT_SUCCESS, payload: point };
}
export function getProductPointSuccess(likeStatus) {
    return { type: actionTypes.GET_PRODUCTPOINT_SUCCESS, payload: likeStatus };
  }
// product point işlemi
export function productPointAdd(point) {
  return function (dispatch) {
    let url = API + "product/pointadd";
    axios
      .post(url, point)
      .then((response) => response.data)
      .then((result) => {
        dispatch(productPointAddSuccess(result));
      })
      .catch((error) => {
        console.log("PRODUCT POINT ADD OLAYINDA HATA OLDU");
      });
  };
}

//Posta ait like sayılarını döner
export function getProductPoint(productId) {
  return function (dispatch) {
    let url = API + "product/getproductpoint/?productId=" + productId;
    axios
      .get(url)
      .then((result) => {
        dispatch(getProductPointSuccess(result.data));
      })
      .catch((error) => {
        console.log("POINT GELMEDİ", error);
      });
  };
}
