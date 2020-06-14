import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_POPULARCART_SUCCESS = "GET_POPULARCART_SUCCESS";
const GET_POPULARCART_FAIL = "GET_POPULARCART_FAIL";

const GET_PRODUCTCART_SUCCESS = "GET_PRODUCTCART_SUCCESS";
const GET_PRODUCTCART_FAIL = "GET_PRODUCTCART_FAIL";

export const actionTypes = {
  GET_POPULARCART_SUCCESS,
  GET_POPULARCART_FAIL,
  GET_PRODUCTCART_SUCCESS,
};

function getPopularCartSuccess(productCart) {
  return { type: actionTypes.GET_POPULARCART_SUCCESS, payload: productCart };
}

function getProductCartSuccess(productCart) {
  return { type: actionTypes.GET_PRODUCTCART_SUCCESS, payload: productCart };
}

//Tüm kategorileri çeker
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
    console.log("ptip ifine girdi");
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
