import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_PRODUCTYPE_SUCCESS = "GET_PRODUCTYPE_SUCCESS";
const GET_PRODUCTYPE_FAIL = "GET_PRODUCTYPE_FAIL";


export const actionTypes = { GET_PRODUCTYPE_SUCCESS,GET_PRODUCTYPE_FAIL };
function getProductTypeSuccess(productType) {
    return { type: actionTypes.GET_PRODUCTYPE_SUCCESS, payload: productType };
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