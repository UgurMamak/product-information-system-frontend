import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="product_image_area">
        <div className="container">
          <div className="row s_product_inner">
            <div className="col-lg-6">
              <div className="s_Product_carousel">
                <div className="single-prd-item">
                  <img
                    className="img-fluid"
                    src={require("../../img/category/s-p1.jpg")}
                    alt=""
                  />
                </div>
                <div className="single-prd-item">
                  <img
                    className="img-fluid"
                    src={require("../../img/category/s-p1.jpg")}
                    alt=""
                  />
                </div>
                <div className="single-prd-item">
                  <img
                    className="img-fluid"
                    src={require("../../img/category/s-p1.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>Faded SkyBlu Denim Jeans</h3>
                <p>
                  Mill Oil is an innovative oil filled radiator with the most
                  modern technology. If you are looking for something that can
                  make your interior look awesome, and at the same time give you
                  the pleasant warm feeling during the winter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
