import React, { Component } from "react";
import ContactForm from "./contact-form";

export default class index extends Component {
  render() {
    return (
      <div>
     
        <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>İLETİŞİM</h1>
              <nav className="d-flex align-items-center">
                <a href="index.html">Anasayfa<span className="lnr lnr-arrow-right" /></a>
                <a href="category.html">iletişim</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="login_box_area section_gap">
        <div className="row">
        <div className="col-md-4"/>
        <div className="col-md-4">
          <div className="register-form">
            <h3 className="billing-title text-center">İLETİŞİM</h3>           
            <ContactForm />
          </div></div>
        </div>
        </section>
      </div>
    );
  }
}
