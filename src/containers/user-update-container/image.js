import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";

export default class Image extends Component {
  state = {
    fileName: "Resim Seç",
  };
  render() {
    return (
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-sm-2">
          <div className="text-center">
            <img
              src={this.props.imagePath}
              className="avatar img-circle img-thumbnail"
              alt="avatar"
              style={{ borderRadius: "50%" }}
            />
          </div>

          <input
            accept="image/*"
            id="icon-button-file"
            onChange={this.props.handleFileUpload}
            style={{ display: "none" }}
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="secondary"
              size="small"
              aria-label="upload picture"
              component="span"
              style={{ color: "#ffba00" }}
            >
              <ImageIcon />
              {this.props.imageFile === null
                ? this.state.fileName
                : this.props.imageFile.name}
            </IconButton>
          </label>
        </div>

        <div className="col-sm-9">
          <div className="col-xs-6">
            <div className="col-sm-10">
              <h3>
                {this.props.user.firstName + " " + this.props.user.lastName}
              </h3>
              <br />
              <h3>{this.props.user.email}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
