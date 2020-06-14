import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_PRODUCTDETAIL_SUCCESS = "GET_PRODUCTDETAIL_SUCCESS";
const GET_POSTDETAIL_FAIL = "GET_POSTDETAIL_FAIL";

const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
const CREATE_PRODUCT_FAIL = "CREATE_PRODUCT_FAIL";

export const actionTypes = {
  GET_PRODUCTDETAIL_SUCCESS,
  GET_POSTDETAIL_FAIL,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
};

function getProductDetailSuccess(productDetail) {
  return {
    type: actionTypes.GET_PRODUCTDETAIL_SUCCESS,
    payload: productDetail,
  };
}

function getProductDetailFail(productDetail) {
  return { type: actionTypes.GET_POSTDETAIL_FAIL, payload: productDetail };
}

export function createProductSuccess(post) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: post };
}

export function createProductFail(post) {
  return { type: actionTypes.CREATE_PRODUCT_FAIL, payload: post };
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

export function createProduct(post) {
  return function (dispatch) {
    let url = API + "product/add";
    axios
      .post(url, post)
      .then((response) => response.data)
      .then((result) => {
        dispatch(createProductSuccess(result));
      })
      .catch((error) => {
        console.log("PRODUCT EKLERKEN HATA");
        dispatch(createProductFail(error.response.data));
      });
  };
}
