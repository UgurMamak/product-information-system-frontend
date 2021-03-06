import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_POPULARCART_SUCCESS = "GET_POPULARCART_SUCCESS";
const GET_POPULARCART_FAIL = "GET_POPULARCART_FAIL";

const GET_PRODUCTCART_SUCCESS = "GET_PRODUCTCART_SUCCESS";
const GET_PRODUCTCART_FAIL = "GET_PRODUCTCART_FAIL";


const GET_USERCART_SUCCESS = "GET_USERCART_SUCCESS";

const DELETE_PRODUCTCATEGORY_SUCCESS = "DELETE_PRODUCTCATEGORY_SUCCESS";
const DELETE_PRODUCTCATEGORY_FAIL = "DELETE_PRODUCTCATEGORY_FAIL";

export const actionTypes = {
  GET_POPULARCART_SUCCESS,
  GET_POPULARCART_FAIL,
  GET_PRODUCTCART_SUCCESS,
  GET_USERCART_SUCCESS,
  DELETE_PRODUCTCATEGORY_SUCCESS,
  DELETE_PRODUCTCATEGORY_FAIL
};

function getPopularCartSuccess(productCart) {
  return { type: actionTypes.GET_POPULARCART_SUCCESS, payload: productCart };
}

function getProductCartSuccess(productCart) {
  return { type: actionTypes.GET_PRODUCTCART_SUCCESS, payload: productCart };
}

function getUserCartSuccess(productCart) {
  return { type: actionTypes.GET_USERCART_SUCCESS, payload: productCart };
}


function deleteProductCategorySuccess(category) {
  return { type: actionTypes.DELETE_PRODUCTCATEGORY_SUCCESS, payload: category };
}

function deleteProductCategoryFail(category) {
  return { type: actionTypes.DELETE_PRODUCTCATEGORY_FAIL, payload: category };
} 

//
export function getPopularCart() {
  return function (dispatch) {
    let url = API + "product/popularproductcart";
    axios
      .get(url)
      .then((result) => {
        dispatch(getPopularCartSuccess(result.data));
      })
      .catch((error) => {
        console.log("POPULER PRODUCT CART GELIRKEN HATA", error);
      });
  };
}

export function getProductCart(categoryId) {
  return function (dispatch) {
    let url = API;

    if (categoryId) {
      url = url + "product/getbycategoryproductcart/?categoryId=" + categoryId;
      console.log("categoryifie girid");
    } else url = url + "product/getallproductcart";

    axios
      .get(url)
      .then((result) => {
        dispatch(getProductCartSuccess(result.data));
      })
      .catch((error) => {
        console.log("POPULER PRODUCT CART GELIRKEN HATA", error);
      });
  };
}

export function getProductTypeCart(productType) {
  return function (dispatch) {
    let url = API;
    url = url + "product/gettypecart";
    axios
      .post(url, productType, { headers: { "Content-Type": "form-data" } })
      .then((result) => {
        dispatch(getProductCartSuccess(result.data));
      })
      .catch((error) => {
        console.log("POPULER PRODUCT CART GELIRKEN HATA", error);
      });
  };
}


//USER'a ait postlar
export function getUserCart(userId) {
  return function (dispatch) {
    let url = API + "product/getusercart/?userId=" + userId;
    axios.get(url).then((result) => {
      dispatch(getUserCartSuccess(result.data));
    });
  };
}




export function deleteProductCategory(productCategory) {
  return function (dispatch) {
    let url = API + "productCategory/delete";
    axios
      .post(url, productCategory)
      .then((response) => response.data)
      .then((result) => {
        dispatch(deleteProductCategorySuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(deleteProductCategoryFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(deleteProductCategoryFail(error.response.data));
      });
  };
}