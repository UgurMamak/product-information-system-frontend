import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_PRODUCTDETAIL_SUCCESS = "GET_PRODUCTDETAIL_SUCCESS";
const GET_POSTDETAIL_FAIL = "GET_POSTDETAIL_FAIL";

export const actionTypes = { GET_PRODUCTDETAIL_SUCCESS, GET_POSTDETAIL_FAIL };

function getProductDetailSuccess(productDetail) {
  return {
    type: actionTypes.GET_PRODUCTDETAIL_SUCCESS,
    payload: productDetail,
  };
}

function getProductDetailFail(productDetail) {
  return { type: actionTypes.GET_POSTDETAIL_FAIL, payload: productDetail };
}

export function getProductDetail(productId) {
  return function (dispatch) {
    let url = API + "product/getproductdetail/?productId=" + productId;
    axios
      .get(url)
      .then((result) => {
        dispatch(getProductDetailSuccess(result.data));
      })
      .catch((error) => {
        console.log("PRODUCT DETAY BİLGİLERİ GELMEDİ");
        dispatch(getProductDetailFail(error.response));
      });
  };
}
