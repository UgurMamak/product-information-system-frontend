import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";
export default class index extends Component {
  state = {
    fileName: "Resim Seç",
  };
  render() {
    return (
      <div className="single-product">
        <img
          style={{
            width: "300px",
            height: "300px",
            alignContent: "center",
          }}
          accept="image/x-png,image/gif,image/jpeg"
          src={this.props.imagePath}
        />

        <div>
          <input
            accept="image/*"
            id="icon-button-file"
            onChange={this.props.handleFileUpload}
            style={{ display: "none" }}
            type="file"
            className="form-control"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="secondary"
              size="small"
              aria-label="upload picture"
              component="span"
            >
              <ImageIcon />
             Resim seç
            </IconButton>
          </label>
        </div>
      </div>
    );
  }
}
