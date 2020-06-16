import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_PRODUCTYPE_SUCCESS = "GET_PRODUCTYPE_SUCCESS";
const GET_PRODUCTYPE_FAIL = "GET_PRODUCTYPE_FAIL";

const DELETE_PRODUCTYPE_SUCCESS = "DELETE_PRODUCTYPE_SUCCESS";
const DELETE_PRODUCTYPE_FAIL = "DELETE_PRODUCTYPE_FAIL";

const SAVE_PRODUCTYPE_SUCCESS = "SAVE_PRODUCTYPE_SUCCESS";
const SAVE_PRODUCTYPE_FAIL = "SAVE_PRODUCTYPE_FAIL";

export const actionTypes = {
  GET_PRODUCTYPE_SUCCESS,
  GET_PRODUCTYPE_FAIL,
  DELETE_PRODUCTYPE_SUCCESS,
  DELETE_PRODUCTYPE_FAIL,
  SAVE_PRODUCTYPE_SUCCESS,
  SAVE_PRODUCTYPE_FAIL,
};

function getProductTypeSuccess(productType) {
  return { type: actionTypes.GET_PRODUCTYPE_SUCCESS, payload: productType };
}

function deleteTypeSuccess(categories) {
  return { type: actionTypes.DELETE_PRODUCTYPE_SUCCESS, payload: categories };
}

function deleteTypeFail(categories) {
  return { type: actionTypes.DELETE_PRODUCTYPE_FAIL, payload: categories };
}

function saveTypeSuccess(categories) {
  return { type: actionTypes.SAVE_PRODUCTYPE_SUCCESS, payload: categories };
}

function saveTypeFail(categories) {
  return { type: actionTypes.SAVE_PRODUCTYPE_FAIL, payload: categories };
}

//
export function getProductType() {
  return function (dispatch) {
    let url = API + "productType/getall";
    axios
      .get(url)
      .then((result) => {
        dispatch(getProductTypeSuccess(result.data));
      })
      .catch((error) => {
        console.log("PRODUCT TYPE GELMEDİ", error);
      });
  };
}

//Tip ekleme
export function saveType(category) {
  return function (dispatch) {
    let url = API + "ProductType/add";
    axios
      .post(url, category)
      .then((response) => response.data)
      .then((result) => {
        dispatch(saveTypeSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(saveTypeFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(saveTypeFail(error.response.data));
      });
  };
}

//Tip silme
export function deleteType(category) {
  return function (dispatch) {
    let url = API + "ProductType/delete";
    axios
      .post(url, category)
      .then((response) => response.data)
      .then((result) => {
        dispatch(deleteTypeSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(deleteTypeFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(deleteTypeFail(error.response.data));
      });
  };
}
