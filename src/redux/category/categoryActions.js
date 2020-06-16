import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
const GET_CATEGORIES_FAIL = "GET_CATEGORIES_FAIL";

const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
const DELETE_CATEGORY_FAIL = "DELETE_CATEGORY_FAIL";

const SAVE_CATEGORY_SUCCESS = "SAVE_CATEGORY_SUCCESS";
const SAVE_CATEGORY_FAIL = "SAVE_CATEGORY_FAIL";

export const actionTypes = {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  SAVE_CATEGORY_SUCCESS,
  SAVE_CATEGORY_FAIL,
};
function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

function deleteCategoriesSuccess(categories) {
  return { type: actionTypes.DELETE_CATEGORY_SUCCESS, payload: categories };
}

function deleteCategoriesFail(categories) {
  return { type: actionTypes.DELETE_CATEGORY_FAIL, payload: categories };
}

function saveCategorySuccess(categories) {
  return { type: actionTypes.SAVE_CATEGORY_SUCCESS, payload: categories };
}

function saveCategoryFail(categories) {
  return { type: actionTypes.SAVE_CATEGORY_FAIL, payload: categories };
}

//Tüm kategorileri çeker
export function getCategories() {
  return function (dispatch) {
    let url = API + "category/getall";
    axios
      .get(url)
      .then((result) => {
        dispatch(getCategoriesSuccess(result.data));
      })
      .catch((error) => {
        console.log("CATEGORY GELMEDİ", error);
      });
  };
}

//Kategori silme
export function deleteCategory(category) {
  return function (dispatch) {
    let url = API + "category/delete";
    axios
      .post(url, category)
      .then((response) => response.data)
      .then((result) => {
        dispatch(deleteCategoriesSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(deleteCategoriesFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(deleteCategoriesFail(error.response.data));
      });
  };
}

//Kategori ekleme
export function saveCategory(category) {
  return function (dispatch) {
    let url = API + "category/add";
    axios
      .post(url, category)
      .then((response) => response.data)
      .then((result) => {
        dispatch(saveCategorySuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(saveCategoryFail("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(saveCategoryFail(error.response.data));
      });
  };
}
