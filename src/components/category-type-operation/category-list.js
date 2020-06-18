import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as CategoryActions from "../../redux/category/categoryActions";
class CategoryList extends Component {
  state = {
    selectedValue: "",
    open: false,
    control: false,
  };

  //button
  categoryDelete = () => {
    if (this.state.selectedValue !== "") {
      this.props.actions.deleteCategory({ id: this.state.selectedValue });
    }
  };

  //select
  selectType = async (event) => {
    await this.setState({ selectedValue: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="col-md-12 form-group">
          {this.props.deleteReducer.deleteCategoryStatus === 1
            ? window.location.reload()
            : ""}
          <FormControl
            variant="outlined"
            className="col-md-12 form-group"
            size="small"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Kategoriler
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.selectedValue}
              onChange={(event) => this.selectType(event)}
              label={this.props.label}
            >
              {this.props.categories.categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.categoryName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-md-12 form-group">
          <button onClick={this.categoryDelete} className="primary-btn">
            Sil
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.CategoryReducer,
    deleteReducer: state.DeleteCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteCategory: bindActionCreators(
        CategoryActions.deleteCategory,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
