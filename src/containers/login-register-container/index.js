import React, { Component } from "react";

//component
import LoginContainer from "../login-container";
import RegisterContainer from "../register-container";

export default class index extends Component {
  render() {
    return (
      <div>
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Giriş Yap/Üye Ol</h1>
              <nav className="d-flex align-items-center">
                <a href="/home">Anasayfa<span className="lnr lnr-arrow-right" /></a>
                <a href="/login">Giriş Yap/Üye Ol</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="login_box_area section_gap">
        <div className="container">
          <div className="row">
            <LoginContainer />
            <RegisterContainer />
          </div>
        </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
