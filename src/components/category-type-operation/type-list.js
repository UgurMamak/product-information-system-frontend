import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import * as TypeActions from "../../redux/product-type/productTypeActions";
class TypeList extends Component {
  state = {
    selectedValue: "",
    open: false,
    control: false,
  };
  componentDidMount() {
    this.props.actions.getType();
  }
  //button
  typeDelete = () => {
    if (this.state.selectedValue !== "") {
      this.props.actions.deleteType({ id: this.state.selectedValue });
    }
  };

  //select
  selectType = async (event) => {
    await this.setState({ selectedValue: event.target.value });
  };

  render() {
    console.log("getType", this.props.types.deleteTypeStatus);
    return (
      <div>
        <div className="col-md-12 form-group">
          {this.props.deleteReducer.deleteTypeStatus === 1
            ? window.location.reload()
            : ""}
          {this.props.deleteReducer.deleteTypeStatus === 0 ? (
            <Alert severity="error">
              <AlertTitle>UYARI</AlertTitle>
              {this.props.deleteReducer.message}
            </Alert>
          ) : (
            ""
          )}
          <FormControl
            variant="outlined"
            className="col-md-12 form-group"
            size="small"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Ürün tipleri
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.selectedValue}
              onChange={(event) => this.selectType(event)}
              label={this.props.label}
            >
              {this.props.types.productType.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.typeName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-md-12 form-group">
          <button onClick={this.typeDelete} className="primary-btn">
            Sil
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    types: state.ProductTypeReducer,
    deleteReducer: state.DeleteTypeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteType: bindActionCreators(TypeActions.deleteType, dispatch),
      getType: bindActionCreators(TypeActions.getProductType, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TypeList);
