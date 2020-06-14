import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { Link } from "react-router-dom";
export default class index extends Component {
  render() {
    return (
   
        <div className="single-product">
          <div className="overlay" />
          <a href={"/productDetail/" + this.props.product.productId}>
          {this.props.product.productImageListDtos.slice(0, 1).map((image) => (
            <img
              key={image.id}
              className="img-fluid"
              style={{ height: "280px", width: "263px" }}
              src={API + "productImage/" + image.imageName}
              alt=""
            />
          ))}
          </a>
          <div className="product-details">
            <h6>{this.props.product.productName}</h6>

            <div className="prd-bottom">
              <Link to={"/profile/"+this.props.product.userId} className="social-info">
                <span className="ti-user" />
                <p className="hover-text">
                  {this.props.product.firstName +
                    " " +
                    this.props.product.lastName}
                </p>
              </Link>
              <a href="/" className="social-info">
                <span className="lnr lnr-heart" />
                <p className="hover-text">Beğenme sayısı</p>
              </a>
              <a href="/" className="social-info">
                <span className="lnr lnr-bubble" />
                <p className="hover-text">{this.props.product.commentNumber}</p>
              </a>
              <a href="/" className="social-info">
                <span className="lnr lnr-star-half" />
                <p className="hover-text">
                {this.props.product.productPoint === null
                  ? "verilmedi"
                  : this.props.product.productPoint + " puan"}
                </p>
              </a>
            </div>
          </div>
        </div>  
    );
  }
}
