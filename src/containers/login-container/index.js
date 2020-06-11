import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="login-form">
          <h3 className="billing-title text-center">Giriş Yap</h3>
          <br /> <br /> <br /> <br /> <br />
          <form action="#">
            <input
              type="text"
              placeholder="Mail Adresiniz*"
              required
              className="common-input mt-20"
            />
            <input
              type="password"
              placeholder="Parolanız*"
              required
              className="common-input mt-20"
            />
            <br/>
            <button className="view-btn color-2 mt-20 w-100">
              <span>Giriş Yap</span>
            </button>
            
          </form>
        </div>
      </div>
    );
  }
}
