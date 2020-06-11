import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <div className="single-deal">
        <div className="overlay" />
        {this.props.product.productImageListDtos.slice(0, 1).map((image) => (
          <img
            style={{ height: this.props.boyut }}
            className="img-fluid w-100"
            src={API + "productImage/" + image.imageName}
            alt=""
            key={image.id}
          />
        ))}
        <div className="deal-details">
          <h6 className="deal-title">{this.props.product.productName}</h6>
          <ul className="blog_meta list">
            <li>
              <Link to="/" style={{ color: "white" }}>
                {" "}
                {this.props.product.firstName +
                  " " +
                  this.props.product.lastName}{" "}
                <i className="lnr lnr-user"></i>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "white" }}>
                {this.props.product.productPoint === null
                  ? "Puan verilmemiş"
                  : this.props.product.productPoint + " puan"}
                <i className="lnr lnr-star"></i>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "white" }}>
                1.2M Beğeni<i className="lnr lnr-heart"></i>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ color: "white" }}>
                {this.props.product.commentNumber} Yorum
                <i className="lnr lnr-bubble"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
