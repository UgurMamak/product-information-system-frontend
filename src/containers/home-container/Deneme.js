import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Deneme extends Component {
  render() {
    return (
      <section className="category-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h1>En Popüler Ürünler</h1>
              </div>
            </div>

          


            <div className="col-lg-8 col-md-12">
              <div className="row">

                <div className="col-lg-8 col-md-8">
                  <div className="single-deal">
                    <div className="overlay" />
                    <img
                      style={{ height: "184px" }}
                      className="img-fluid w-100"
                      src={require("../../img/product/kulaklık.jpg")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className="single-deal">
                    <div className="overlay" />
                    <img
                      style={{ height: "184px" }}
                      className="img-fluid w-100"
                      src={require("../../img/product/telefon.jpg")}
                      alt=""
                    />
                    <a
                      href="img/category/c2.jpg"
                      className="img-pop-up"
                      target="_blank"
                    >
                      <div className="deal-details">
                        <h6 className="deal-title">Sneaker for Sports</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-deal">
                    <div className="overlay" />
                    <img
                      style={{ height: "184px" }}
                      className="img-fluid w-100"
                      src={require("../../img/product/casper.jpg")}
                      alt=""
                    />
                    <a
                      href="img/category/c3.jpg"
                      className="img-pop-up"
                      target="_blank"
                    >
                      <div className="deal-details">
                        <h6 className="deal-title">Product for Couple</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  <div className="single-deal">
                    <div className="overlay" />
                    <img
                      style={{ height: "184px" }}
                      className="img-fluid w-100"
                      src={require("../../img/product/casper.jpg")}
                      alt=""
                    />
                    <a
                      href="img/category/c4.jpg"
                      className="img-pop-up"
                      target="_blank"
                    >
                      
                      <div className="deal-details">
                        <h6 className="deal-title">Sneaker for Sports</h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>






          
            <div className="col-lg-4 col-md-6">
              <div className="single-deal">
                <div className="overlay" />
                <img
                  style={{ height: "400px" }}
                  className="img-fluid w-100"
                  src={require("../../img/product/casper.jpg")}
                  alt=""
                />
                <a
                  href="img/category/ruj.jpg"
                  className="img-pop-up"
                  target="_blank"
                >
                  <div className="deal-details">
                    <h6 className="deal-title">Sneaker for Sports</h6>
                  </div>
                </a>
              </div>
            </div>








          </div>
        </div>
      </section>
    );
  }
}
