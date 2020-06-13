import React, { Component } from "react";
import { API } from "../../../helpers/api-config";
import { connect } from "react-redux";
//component
import CommentLike from "../comment-like";
import ProductPoint from "../../product-point";
import PointShow from "../../product-point/point-show";
class index extends Component {
  render() {
    const commentList = [];
    const item = this.props.comment.map((comment) =>
      commentList.push(
        <div className="review_item" key={comment.id}>
          <div className="media">
            <div className="d-flex">
              <img
                className="media-object"
                src={API + "userImage/" + comment.imageName}
                alt=""
              />
            </div>
            <div className="media-body">
              <h4>{comment.firstName + " " + comment.lastName}</h4>
              {comment.created}

              <div className="like_btn">
                <CommentLike
                  productId={this.props.productId}
                  commentId={comment.id}
                  trueNumber={comment.trueNumber}
                  falseNumber={comment.falseNumber}
                />
              </div>
            </div>
          </div>

          <p>{comment.content}</p>
          <hr />
        </div>
      )
    );

    return (
      <div className="col-lg-12">
        <div className="row total_rate">
          <PointShow productId={this.props.productId} />

          <div className="col-6">
            <div className="rating_list">
              <h3>Ürüne Puan Ver</h3>
              <ProductPoint
                handlePoint={this.handlePoint}
                productId={this.props.productId}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="review_list">{commentList}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productReducer: state.ProductReducer,
  };
}
export default connect(mapStateToProps, null)(index);
