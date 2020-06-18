import React, { Component } from "react";
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DislikeIcon from "@material-ui/icons/ThumbDownAltOutlined";
import IconButton from "@material-ui/core/IconButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CommentLikeActions from "../../../redux/comment-like/commentLikeActions";
import * as ProductActions from "../../../redux/product/productActions";
class index extends Component {
  async componentDidMount() {
    // this.props.actions.getCommentLike(this.props.commentId);
  }
  handleDislike = async (event) => {
    await this.props.actions.addCommentLike({
      commentId: this.props.commentId,
      userId: localStorage.getItem("userId"),
      likeStatus: false,
    });
    console.log("like tıklandı");
  };

  handleLike = async (event) => {
    await this.props.actions.addCommentLike({
      commentId: this.props.commentId,
      userId: localStorage.getItem("userId"),
      likeStatus: true,
    });
  };

  //state ve props değişimde çalışır.
  async componentWillUpdate() {
    await this.props.actions.getProduct(this.props.productId);
  }

  render() {
    return (
      <div>
        <IconButton
          onClick={this.handleLike}
          color="secondary"
          aria-label="delete"
          size="small"
          style={{ color: "#ffba00" }}
        >
          {this.props.trueNumber}
          <LikeIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={this.handleDislike}
          color="secondary"
          aria-label="delete"
          size="small"
          style={{ color: "#ffba00" }}
        >
          {this.props.falseNumber}
          <DislikeIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentLikeReducer: state.CommentLikeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addCommentLike: bindActionCreators(
        CommentLikeActions.commentLikeAdd,
        dispatch
      ),
      getProduct: bindActionCreators(ProductActions.getProductDetail, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
