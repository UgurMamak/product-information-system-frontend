import { API } from "../../helpers/api-config";
import setAuthorizationToken from "../../helpers/setAuthorizationToken";
import axios from "axios";
import jwt from "jwt-decode";

//LOGIN
const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
const FAIL_LOGIN = "FAIL_LOGIN";
const RESET_LOGIN = "RESET_LOGIN";

//REGİSTER
const CREATE_REGISTER_SUCCESS = "CREATE_REGISTER_SUCCESS";
const FAIL_REGISTER = "FAIL_REGISTER";
const RESET_REGISTER = "RESET_REGISTER";

//USER
const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const actionTypes = {
  GET_LOGIN_SUCCESS,
  FAIL_LOGIN,
  RESET_LOGIN,
  CREATE_REGISTER_SUCCESS,
  FAIL_REGISTER,
  RESET_REGISTER,
  GET_USER_SUCCESS
};
export function loginSuccess(user) {
  return { type: actionTypes.GET_LOGIN_SUCCESS, payload: user };
}

export function failLogin(user) {
  return { type: actionTypes.FAIL_LOGIN, payload: user };
}

export function resetLogin() {
  return { type: actionTypes.RESET_LOGIN };
}

export function registerSuccess(user) {
  return { type: actionTypes.CREATE_REGISTER_SUCCESS, payload: user };
}

export function failRegister(user) {
  return { type: actionTypes.FAIL_REGISTER, payload: user };
}
//Giriş bilgilerini temizlemek için
export function resetRegister() {
  return { type: actionTypes.RESET_REGISTER };
}


export function getUserSuccess(user) {
  return { type: actionTypes.GET_USER_SUCCESS , payload: user };
}

//Login işlemi
export function LoginUser(user) {
  return function (dispatch) {
    let url = API + "auth/login";
    axios
      .post(url, user)
      .then((response) => response.data)
      .then((result) => {
        const token = result.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", result.userId);
        setAuthorizationToken(token);

        var role;
        result.role.map((m) => {
          if (m.roleName) role = m.roleName;
        });
        localStorage.setItem("role", role);

        dispatch(loginSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(failLogin("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(failLogin(error.response.data));
      });
  };
}

//KULLANICI EKLEME İŞLEMİ
export function saveUser(user) {
  return function (dispatch) {
    let url = API + "auth/register";
    axios
      .post(url, user)
      .then((response) => response.data)
      .then((result) => {
        const token = result.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", result.userId);

        setAuthorizationToken(token);

        var role;
        result.role.map((m) => {
          if (m.roleName) role = m.roleName;
        });
        localStorage.setItem("role", role);
        dispatch(registerSuccess(result));
      })
      .catch((error) => {
        dispatch(failRegister(error.response.data));
      });
  };
}

//USER BİLGİLERİ GETİRME
export function getUser(userId) {
  return function (dispatch) {
    let url = API + "user/getbyuserId/?userId=" + userId;
    axios
      .get(url)
      .then((result) => {
        dispatch(getUserSuccess(result.data));
      })
      .catch((error) => console.log("USER BİLGİSİ GELİRKEN HATA", error));
  };
}