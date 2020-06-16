import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProductTypeActions from "../../redux/product-type/productTypeActions";
class TypeSelect extends Component {
  componentDidMount() {
    this.props.actions.getProductType();
  }
  render() {
    return (
      <FormControl
        variant="outlined"
        className="col-md-12 form-group"
        size="small"
      >
        <InputLabel id="demo-simple-select-outlined-label">
          {this.props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.props.productType}
          onChange={(event) => this.props.selectType(event)}
          label={this.props.label}
        >
          <MenuItem value="">Ürün Tipi Seçiniz..</MenuItem>
          {this.props.typeReducer.productType.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.typeName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeSelect);
