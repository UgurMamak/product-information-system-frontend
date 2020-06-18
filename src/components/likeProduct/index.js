import React, { Component } from "react";
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DislikeIcon from "@material-ui/icons/ThumbDownAltOutlined";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
//actions
import * as likeActions from "../../redux/like-product/likeActions";

class LikePost extends Component {
  componentDidMount() {
    this.props.actions.getLikeStatus(this.props.productId);
  }

  constructor(props) {
    super(props);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleDislike = async (event) => {
    if (localStorage.getItem("userId") === null) {
      alertify.error("Postu beğenmek için sisteme giriş yapmanız gerekiyor.");
    } else {
      await this.props.actions.likeStatus({
        productId: this.props.productId,
        userId: localStorage.getItem("userId"),
        likeStatus: false,
      });
    }
  };

  handleLike = async (event) => {
    if (localStorage.getItem("userId") === null) {
      alertify.error("Postu beğenmek için sisteme giriş yapmanız gerekiyor.");
    } else {
      await this.props.actions.likeStatus({
        productId: this.props.productId,
        userId: localStorage.getItem("userId"),
        likeStatus: true,
      });
    }
  };

  render() {
    if (this.props.likeReducer.status === 1) {
      alertify.warning(this.props.likeReducer.likeValue.message);
      //this.props.actions.resetStatus();
    }

    return (
      <div>
        <IconButton
          onClick={this.handleLike}
          color="secondary"
          aria-label="delete"
          style={{ color: "#ffba00" }}
        >
          <LikeIcon fontSize="inherit" />
          {this.props.likeReducer.likeValue.trueNumber}
        </IconButton>
        <IconButton
          onClick={this.handleDislike}
          color="secondary"
          aria-label="delete"
          style={{ color: "#ffba00" }}
        >
          <DislikeIcon fontSize="inherit" />
          {this.props.likeReducer.likeValue.falseNumber}
        </IconButton>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    likeReducer: state.LikeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      likeStatus: bindActionCreators(likeActions.likeAdd, dispatch),
      getLikeStatus: bindActionCreators(likeActions.getLikeStatus, dispatch),
      resetStatus: bindActionCreators(likeActions.resetStatus, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikePost);
