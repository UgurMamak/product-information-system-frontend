import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_POPULARCART_SUCCESS = "GET_POPULARCART_SUCCESS";
const GET_POPULARCART_FAIL = "GET_POPULARCART_FAIL";


export const actionTypes = { GET_POPULARCART_SUCCESS,GET_POPULARCART_FAIL};

function getPopularCartSuccess(productCart) {
    return { type: actionTypes.GET_POPULARCART_SUCCESS, payload: productCart};
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