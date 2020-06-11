import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as productCartActions from "../../redux/product-cart/productCartActions";

//component
import PopularCart from "../../components/popular-product-cart";

import Deneme from "./Deneme";

class index extends Component {
  componentDidMount() {
    this.props.actions.getPopularCart();
  }
  render() {
    const popularList = [];
    const popularList2 = [];
    let sayac = 0;

    const item = this.props.popularlist.popularProduct.map((product) => {
      if (sayac < 4) {
        if (sayac === 0 || sayac === 3) {
          popularList.push(
            <div key={product.productId} className="col-lg-8 col-md-8">
              <PopularCart product={product} boyut={"184px"} />
            </div>
          );
          sayac++;
        } else if (sayac === 1 || sayac === 2) {
          popularList.push(
            <div  key={product.productId} className="col-lg-4 col-md-4">
              <PopularCart product={product} boyut={"184px"} />
            </div>
          );
          sayac++;
        }
      } else if (sayac === 4) {
        popularList2.push(
          <div  key={product.productId} className="col-lg-4 col-md-6">
            <PopularCart  product={product} boyut={"400px"} />
          </div>
        );
        sayac++;
      }
    });

    return (
      <div>
        {console.log("fsh",this.props.popularlist.popularProduct)}
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first"></div>
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

        <section className="category-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="section-title">
                  <h1>En Popüler Ürünler</h1>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                <div className="row">{popularList}</div>
              </div>
              {popularList2}

              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-8 col-md-8">
                    <div className="single-deal">
                      <div className="overlay" />

                      <img
                        className="img-fluid w-100"
                        src={require("../../img/product/kulaklık.jpg")}
                        alt=""
                      />

                      {/*<Link to="img/category/c1.jpg" className="img-pop-up" target="_blank">*/}
                      <div className="deal-details">
                        <h6 className="deal-title">
                          <ul className="blog_meta list">
                            <li>
                              <Link to="/">
                                {" "}
                                Uğur Mamak <i className="lnr lnr-user"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                4,2 puan<i className="lnr lnr-star"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                1.2M Beğeni<i className="lnr lnr-heart"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                6 Yorum<i className="lnr lnr-bubble"></i>
                              </Link>
                            </li>
                          </ul>
                        </h6>
                      </div>
                      {/*</Link>*/}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="single-deal">
                      <div className="overlay" />
                      <img
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
                        className="img-fluid w-100"
                        src={require("../../img/category/c3.jpg")}
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
                        className="img-fluid w-100"
                        src={require("../../img/category/c4.jpg")}
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
                    className="img-fluid w-100"
                    src={require("../../img/product/ruj.jpg")}
                    alt=""
                  />
                  <a
                    href="img/category/c45.jpg"
                    className="img-pop-up"
                    target="_blank"
                  >
                    <div className="deal-details">
                      <h6 className="deal-title">denememmememememe</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    popularlist: state.ProductCartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPopularCart: bindActionCreators(
        productCartActions.getPopularCart,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
