import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";

import * as CategoryActions from "../../redux/category/categoryActions";
class CategoryAdd extends Component {
  state = {
    categoryName: "",
    control: false,
    controlMessage: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ control: false });
  };
  handleSave = (event) => {
    if (this.state.categoryName !== "") {
      this.props.actions.saveCategory({
        categoryName: this.state.categoryName,
      });
    } else {
      this.setState({ control: true, controlMessage: "Boş Bırakmayınız." });
    }
  };
  render() {
    console.log("savered", this.props.saveReducer);
    return (
      <div>
        <div className="col-md-12 form-group">
          {this.props.saveReducer.saveCategoryStatus === 1
            ? window.location.reload()
            : ""}
          {this.props.saveReducer.saveCategoryStatus === 0 ? (
            <Alert severity="error">
              <AlertTitle>UYARI</AlertTitle>
              {this.props.saveReducer.message}
            </Alert>
          ) : (
            ""
          )}

          <input
            className="form-control"
            name="categoryName"
            id="categoryName"
            rows={1}
            placeholder="Kategori ismi..."
            defaultValue={""}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-12 form-group">
          <button onClick={this.handleSave} className="primary-btn">
            Ekle
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    saveReducer: state.SaveCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveCategory: bindActionCreators(CategoryActions.saveCategory, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdd);
