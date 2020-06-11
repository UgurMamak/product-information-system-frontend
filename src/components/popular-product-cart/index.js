import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="single-deal">
        <div className="overlay" />
        <img
          style={{ height: this.props.boyut }}
          className="img-fluid w-100"
          src={require("../../img/product/casper.jpg")}
          alt=""
        />
        <a href="img/category/c45.jpg" className="img-pop-up" target="_blank">
          <div className="deal-details">
    <h6 className="deal-title">{this.props.product.productName}</h6>
          </div>
        </a>
      </div>
    );
  }
}
