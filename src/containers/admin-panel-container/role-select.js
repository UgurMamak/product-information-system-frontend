import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { User, Operator } from "../../helpers/role";
export default class RoleSelect extends Component {
  render() {
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Yetki</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.props.role}
            onChange={(event) => this.props.handleChange(event)}
            label="Yetki"
          >
            <MenuItem value={Operator}>Operator</MenuItem>
            <MenuItem value={User}>User</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}
