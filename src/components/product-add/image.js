import React, { Component } from "react";
import { Button } from "reactstrap";

export default class index extends Component {
  state = {
    fileName: "Resim Seç",
  };
  render() {
    const style = {
      backgroundColor: "transparent",
      color: "black",
      border: "none",
    };

    return (
      <div className="single-product">
        <Button
          name={this.props.isim}
          onClick={this.props.deleteImage}
          style={style}    
        >
          X
        </Button>
        <img
          style={{
            width: "200px",
            height: "200px",
            alignContent: "center",
          }}
          accept="image/x-png,image/gif,image/jpeg"
          src={this.props.imagePath}
        />
      </div>
    );
  }
}
