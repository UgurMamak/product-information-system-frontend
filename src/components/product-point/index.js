import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ProductPointActions from "../../redux/product-point/productPointActions";

class index extends Component {
  handlePoint(point) {
    const data = new FormData();
    data.append("ProductId", this.props.productId);
    data.append("UserId", "c5638364-e55b-433b-b84e-3ba26cf9fe38");
    data.append("Point", point);
    this.props.actions.addProductPoint(data);
  }
  render() {
    return (
      <div>
        <IconButton aria-label="delete" onClick={() => this.handlePoint(1)}>
          <StarIcon fontSize="large" style={{ color: "yellow" }} />1
        </IconButton>
        <IconButton aria-label="delete" onClick={() => this.handlePoint(2)}>
          <StarIcon fontSize="large" style={{ color: "yellow" }} />2
        </IconButton>
        <IconButton aria-label="delete" onClick={() => this.handlePoint(3)}>
          <StarIcon fontSize="large" style={{ color: "yellow" }} />3
        </IconButton>
        <IconButton aria-label="delete" onClick={() => this.handlePoint(4)}>
          <StarIcon fontSize="large" style={{ color: "yellow" }} />4
        </IconButton>
        <IconButton aria-label="delete" onClick={() => this.handlePoint(5)}>
          <StarIcon fontSize="large" style={{ color: "yellow" }} />5
        </IconButton>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductPoint: bindActionCreators(
        ProductPointActions.getProductPoint,
        dispatch
      ),
      addProductPoint: bindActionCreators(
        ProductPointActions.productPointAdd,
        dispatch
      ),
      //resetStatus: bindActionCreators(likeActions.resetStatus, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(index);
