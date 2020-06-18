import React, { Component } from "react";
import { Button } from "reactstrap";
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

        <Button name={this.props.isim} onClick={this.props.deleteImage}>
          Sil
        </Button>
      </div>
    );
  }
}
