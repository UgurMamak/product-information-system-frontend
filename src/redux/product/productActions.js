import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_PRODUCTDETAIL_SUCCESS = "GET_PRODUCTDETAIL_SUCCESS";
const GET_POSTDETAIL_FAIL = "GET_POSTDETAIL_FAIL";

const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
const CREATE_PRODUCT_FAIL = "CREATE_PRODUCT_FAIL";

const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";



const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
const UPDATE_PRODUCT_FAIL = "UPDATE_PRODUCT_FAIL";

export const actionTypes = {
  GET_PRODUCTDETAIL_SUCCESS,
  GET_POSTDETAIL_FAIL,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL
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

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function createProductFail(product ) {
  return { type: actionTypes.CREATE_PRODUCT_FAIL, payload: product  };
}

export function deleteProductSuccess(product) {
  return { type: actionTypes.DELETE_PRODUCT_SUCCESS, payload:product };
}

export function deleteProductFail(product) {
  return { type: actionTypes.DELETE_PRODUCT_FAIL, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload:product };
}

export function updateProductFail(product) {
  return { type: actionTypes.UPDATE_PRODUCT_FAIL, payload: product };
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

//Ürün ekleme
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

//ürün silme
export function deleteProduct(product) {
  return function (dispatch) {
    let url = API + "product/delete";
    axios
      .post(url, product)
      .then((response) => response.data)
      .then((result) => {
        dispatch(deleteProductSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(deleteProductFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(deleteProductFail(error.response.data));
      });
  };
}

//productUpdate
export function updateProduct(product) {
  return function (dispatch) {
    let url = API + "product/update";
    axios
      .post(url, product)
      .then((response)=>response.data)
      .then((result)=>{
        dispatch(updateProductSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(updateProductFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(updateProductFail(error.response.data));
      });
  };
}