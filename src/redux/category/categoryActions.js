import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
const GET_CATEGORIES_FAIL = "GET_CATEGORIES_FAIL";
/*
const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const SAVE_CATEGORY = "SAVE_CATEGORY";
const FAIL_SAVE_CATEGORY = "FAIL_SAVE_CATEGORY";
const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
const FAIL_DELETE_CATEGORY_SUCCESS = "FAIL_DELETE_CATEGORY_SUCCESS";
*/

export const actionTypes = { GET_CATEGORIES_SUCCESS,GET_CATEGORIES_FAIL };
function getCategoriesSuccess(categories) {
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
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