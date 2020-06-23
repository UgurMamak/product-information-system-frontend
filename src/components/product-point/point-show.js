import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ProductPointActions from "../../redux/product-point/productPointActions";
class PointShow extends Component {
  componentDidMount() {
    this.props.actions.getProductPoint(this.props.productId);
  }
  render() {
    return (
      <div className="col-3">
        <div className="box_total">
          <h5>Puan</h5>
          {this.props.productPointReducer.pointValue.point === 0 ? (
            "Henüz puan verilmemiş"
          ) : (
            <h4>{this.props.productPointReducer.pointValue.point}</h4>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productPointReducer: state.ProductPointReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductPoint: bindActionCreators(
        ProductPointActions.getProductPoint,
        dispatch
      ),
      //resetStatus: bindActionCreators(likeActions.resetStatus, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PointShow);
