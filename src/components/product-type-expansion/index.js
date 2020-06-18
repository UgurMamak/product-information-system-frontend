import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import * as ProductCartActions from "../../redux/product-cart/productCartActions";
import * as ProductTypeActions from "../../redux/product-type/productTypeActions";

class index extends Component {
  state = {
    typeList: [],
  };
  componentDidMount() {
    this.props.actions.getProductType();
  }

  checkedChange = async (event) => {
    if (event.target.checked) {
      this.state.typeList.push(event.target.name);
    } else {
      var array = [...this.state.typeList]; // make a separate copy of the array
      var sonuc = await array.filter((item) => item !== event.target.name);
      this.setState({ typeList: sonuc });
    }

    if (this.state.typeList.length !== 0) {
      let data = new FormData();
      for (let i = 0; i < this.state.typeList.length; i++) {
        data.append("ProductType", this.state.typeList[i]);
      }
      //data.append("productType", this.state.typeList);
      this.props.actions.getProductTypeCart(data);
    } else {
      this.props.actions.getProductCart();
    }
  };
  render() {
    const typeList = [];
    this.props.typeReducer.productType.map((type) =>
      typeList.push(
        <li className="filter-list" key={type.id}>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "#ffba00" }}
                size="small"
                onChange={this.checkedChange}
                name={type.typeName}
              />
            }
            label={type.typeName}
          />
        </li>
      )
    );

    return (
      <div className="sidebar-filter mt-50">
        <div className="top-filter-head">Ürünler</div>
        <div className="common-filter">
          <form action="#">
            <ul>{typeList}</ul>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    typeReducer: state.ProductTypeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductType: bindActionCreators(
        ProductTypeActions.getProductType,
        dispatch
      ),
      getProductCart: bindActionCreators(
        ProductCartActions.getProductCart,
        dispatch
      ),
      getProductTypeCart: bindActionCreators(
        ProductCartActions.getProductTypeCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
