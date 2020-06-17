import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as productActions from "../../redux/product/productActions";
//components
import Image from "./image";
import LikeProduct from "../likeProduct"
//containers
import CommentContainer from "../../containers/comment-container";
class index extends Component {
  componentDidMount() {
    this.props.actions.getProduct(this.props.productId);
  }
  render() {



    return (
      <div>
        
        {this.props.productReducer.productDetail.map((product) => (
          <div key={product.productId}>
            <div className="product_image_area">
              <div className="container">
                {console.log("deyta", this.props.productReducer.productDetail)}
                <div className="row s_product_inner">
                  <div className="col-lg-6">
                    <Image image={product.productImageListDtos} />
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                  <LikeProduct productId={product.productId}/>
                    <div className="s_product_text">
                      <h3>{product.productName}</h3>
                      <p>{product.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <CommentContainer comment={product.commentDtos} productPoint={product.productPoint} />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productReducer: state.ProductReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(productActions.getProductDetail, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
