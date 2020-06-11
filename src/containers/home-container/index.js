import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as productCartActions from "../../redux/product-cart/productCartActions";

//component
import PopularCart from "../../components/popular-product-cart";
import ProductCart from "../../components/product-cart";
import Pagination from "../../components/paginiton/Paginition";

import Deneme from "./Deneme";

class index extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentDidMount() {
    this.props.actions.getPopularCart();
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    const popularList = [];
    const popularList2 = [];
    let sayac = 0;
    const productcart = [];
    const item = this.props.popularlist.popularProduct.map((product) => {
      productcart.push(<ProductCart key={product.productId} />);

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
            <div key={product.productId} className="col-lg-4 col-md-4">
              <PopularCart product={product} boyut={"184px"} />
            </div>
          );
          sayac++;
        }
      } else if (sayac === 4) {
        popularList2.push(
          <div key={product.productId} className="col-lg-4 col-md-6">
            <PopularCart product={product} boyut={"400px"} />
          </div>
        );
        sayac++;
      }
    });

    return (
      <div>
        {console.log("fsh", this.props.popularlist.popularProduct)}
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first"></div>
            </div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

        <section className="active-product-area section_gap">
          {/* single product slide */}
          <div className="single-product-slider">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="section-title">
                  <Pagination
                    //items={this.state.exampleItems}
                    items={this.props.popularlist.popularProduct}
                    onChangePage={this.onChangePage}
                  /> 
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/*productcart*/}
                {this.state.pageOfItems.map((product) => (
                  <ProductCart key={product.productId} product={product} />
                ))}
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
