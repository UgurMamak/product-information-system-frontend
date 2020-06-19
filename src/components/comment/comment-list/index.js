import React, { Component } from "react";
import { API } from "../../../helpers/api-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
//component
import CommentLike from "../comment-like";
import ProductPoint from "../../product-point";
import PointShow from "../../product-point/point-show";
import UpdateDialog from "../comment-update/index";

import * as CommentActions from "../../../redux/comment/commentActions";

class index extends Component {
  state = { modalOpen: false, alertOpen: false, content: "", commentId: "" };

  deletecomment = async (comment) => {
    console.log(comment);

    this.props.actions.deleteComment({ id: comment });
  };

  updateProduct = async (comment) => {
    this.setState({ commentId: comment.id });
    this.setState({ content: comment.content });
    this.setState({ alertOpen: true });
  };

  agreeUpdateProduct = (content) => {
    this.setState({ alertOpen: false });
    this.props.actions.updateComment({
      id: this.state.commentId,
      content: content,
    });
  };

  disAgreeUpdateProduct = () => {
    this.setState({ alertOpen: false });
  };

  render() {
    console.log("commentReducer", this.props.commentReducer.deleteStatus);
    console.log("updateReducere", this.props.updateReducer);
    if (this.props.commentReducer.deleteStatus === 1) {
      window.location.reload();
    }
    if (this.props.updateReducer.updateStatus === 1) {
      window.location.reload();
    }

    const commentList = [];
    this.props.comment.map((comment) =>
      commentList.push(
        <div className="review_item" key={comment.id}>
          {localStorage.getItem("userId") === comment.userId ? (
            <CardHeader
              action={
                <UncontrolledDropdown>
                  <DropdownToggle tag="a">
                    <MoreVertIcon style={{ cursor: "pointer" }} />
                  </DropdownToggle>
                  <DropdownMenu size="sm">
                    <DropdownItem
                      style={{ cursor: "pointer" }}
                      onClick={() => this.deletecomment(comment.id)}
                    >
                      Sil
                    </DropdownItem>

                    <DropdownItem
                      style={{ cursor: "pointer" }}
                      onClick={() => this.updateProduct(comment)}
                    >
                      Güncelle
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              }
            />
          ) : (
            ""
          )}

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
        <UpdateDialog
          open={this.state.alertOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disAgreeUpdateProduct={this.disAgreeUpdateProduct}
          agreeUpdateProduct={this.agreeUpdateProduct}
          content={this.state.content}
          message={"Ürünü Silmek istediğinizden emin misiniz?"}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productReducer: state.ProductReducer,
    commentReducer: state.CommentReducer,
    updateReducer: state.CommentUpdateReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteComment: bindActionCreators(CommentActions.deleteComment, dispatch),
      updateComment: bindActionCreators(CommentActions.updateComment, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
