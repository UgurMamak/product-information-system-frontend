import React, { Component } from "react";

//container
import CommentContainer from "../comment-container"

//component
import ProductDetail from "../../components/product-detail";

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                <h1>Ürün İsmi yazsın</h1>
                <nav className="d-flex align-items-center">
                  <a href="index.html">
                    Anasayfa
                    <span className="lnr lnr-arrow-right" />
                  </a>
                  <a href="category.html">iletişim</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <ProductDetail />
        <CommentContainer/>
      </div>
    );
  }
}
