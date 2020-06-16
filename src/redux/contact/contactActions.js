import { API } from "../../helpers/api-config";

import axios from "axios";

/* Action Types */
const CREATE_MAIL_SUCCESS = "CREATE_MAIL_SUCCESS";
const CREATE_MAIL_FAIL = "CREATE_MAIL_FAIL";

export const actionTypes = {
  CREATE_MAIL_SUCCESS,
  CREATE_MAIL_FAIL,
};

//POST MAIL
function createMailSuccess(mail) {
  return { type: actionTypes.CREATE_MAIL_SUCCESS, payload: mail };
}
function createMailFail(mail) {
    return { type: actionTypes.CREATE_MAIL_FAIL, payload: mail };
  }

export function createMail(mail) {
  return function (dispatch) {
    let url = API + "mail/mailsend";
    axios
      .post(url, mail) 
      .then((response) => response.data)
      .then((result) => {
        dispatch(createMailSuccess(result));
      })
      .catch((error) => {
        dispatch(createMailFail(error.response.data));
      });
  };
}
