import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import * as productCartActions from "../../redux/product-cart/productCartActions";
import { Link } from "@material-ui/core";

class index extends Component {
  selectCategory = (category) => {
    this.props.actions.getProductCart(category.id);
  };

  render() {
    const categoriesList = [];
    const item = this.props.categories.categories.map((category) =>
      categoriesList.push(
        <li key={category.id} className="main-nav-list child">
          <Link
            style={{ cursor: "pointer" }}
            to={"/category/" + category.id}
            onClick={() => this.selectCategory(category)}
          >
            {category.categoryName}
          </Link>
        </li>
      )
    );

    return (
      <div className="sidebar-categories">
        <div className="head">Kategoriler ve Ürün</div>
        <ul className="main-categories">
          <li className="main-nav-list">
            <a
              data-toggle="collapse"
              href="#category"
              aria-expanded="false"
              aria-controls="category"
            >
              <span className="lnr lnr-arrow-right" />
              Kategoriler
            </a>
            <ul
              className="collapse"
              id="category"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="category"
            >
              {categoriesList}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.CategoryReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductCart: bindActionCreators(
        productCartActions.getProductCart,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
