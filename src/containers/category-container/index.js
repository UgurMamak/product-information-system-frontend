import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CategoryExpansion from "../../components/category-expansion";
import ProductTypeExpansion from "../../components/product-type-expansion";

import * as ProductCartActions from "../../redux/product-cart/productCartActions";
//components
import ProductCart from "../../components/product-cart";
import Pagination from "../../components/paginiton/Paginition";
import UserMenu from "../../components/user-menu"
class index extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentDidMount() {
    this.props.actions.getProductCart();
  }
    
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    return (
      <div>
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                <h1>Kategoriler</h1>
                <nav className="d-flex align-items-center">
                  <a href="/home">
                    Anasayfa
                    <span className="lnr lnr-arrow-right" />
                  </a>
                  <a href="/category">kategoriler</a>
                </nav>
              </div>
            </div>
          </div>
        </section> 
        {localStorage.getItem("userId")!==null?<UserMenu/>:""}
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5">
              <CategoryExpansion />
              <ProductTypeExpansion />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7">
              <section className="lattest-product-area pb-40 category-list">
                <div className="row">
                  {this.state.pageOfItems.map((product) => (
                    <div className="col-lg-4 col-md-6" key={product.productId}>
                      <ProductCart product={product} />
                    </div>
                  ))}
                </div>
              </section>
              <Pagination
                    //items={this.state.exampleItems}
                    items={this.props.productCart.popularProduct}
                    onChangePage={this.onChangePage}
                  /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productCart: state.ProductCartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductCart: bindActionCreators(
        ProductCartActions.getProductCart,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
