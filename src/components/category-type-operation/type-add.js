import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import * as TypeActions from "../../redux/product-type/productTypeActions";
class TypeAdd extends Component {
  state = {
    typeName: "",
    control: false,
    controlMessage: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ control: false });
  };
  handleSave = (event) => {
    if (this.state.typeName !== "") {
      this.props.actions.saveType({
        ProductTypeName: this.state.typeName,
      });
    } else {
      this.setState({ control: true, controlMessage: "Boş Bırakmayınız." });
    }
  };
  render() {
    return (
      <div>
        <div className="col-md-12 form-group">
          {this.props.saveReducer.saveTypeStatus === 1
            ? window.location.reload()
            : ""}
          {this.props.saveReducer.saveTypeStatus === 0 ? (
            <Alert severity="error">
              <AlertTitle>UYARI</AlertTitle>
              {this.props.saveReducer.message}
            </Alert>
          ) : (
            ""
          )}

          <input
            className="form-control"
            name="typeName"
            id="typeName"
            rows={1}
            placeholder="Ürün ekle..."
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
    saveReducer: state.SaveTypeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveType: bindActionCreators(TypeActions.saveType, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TypeAdd);
