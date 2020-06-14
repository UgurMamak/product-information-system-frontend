import React, { Component } from "react";
import * as categoryActions from "../../redux/category/categoryActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class Categorychecked extends Component {
  render() {
    const categoryList = [];
    this.props.categories.categories.map((category) =>
      categoryList.push(
        <li className="filter-list" key={category.id}>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "#ffba00" }}
                size="small"
                onChange={this.props.checkedChange}
                name={category.id}
              />
            }
            label={category.categoryName}
          />
        </li>
      )
    );

    return (
      <div className="sidebar-filter mt-50">
        <div className="top-filter-head">Kategoriler</div>
        <div className="common-filter">
          <form action="#">
            <ul>{categoryList}</ul>
          </form>
        </div>
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
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Categorychecked);
