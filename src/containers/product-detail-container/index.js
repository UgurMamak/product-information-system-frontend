import React, { Component } from "react";

//component
import ProductDetail from "../../components/product-detail";
import UserMenu from "../../components/user-menu"
export default class index extends Component {
  render() {
    return (
      <div>
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                
                <nav className="d-flex align-items-center">
                  <a href="/home">
                    Anasayfa
                    <span className="lnr lnr-arrow-right" />
                  </a>
                  <a href="/category">iletişim</a>
                </nav>
              </div>
            </div>
          </div> 
        </section>
        {localStorage.getItem("userId")!==null?<UserMenu/>:""}
        <ProductDetail productId={this.props.match.params.productId} />
      </div>
    );
  }
}
