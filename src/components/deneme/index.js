import React, { Component } from "react";
import ImageChoose from "./imageChoose";
import { Button } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      buttonList: [],
      key: 0,
      imageFileList: [],
    };
    this.createButton = this.createButton.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  createButton = async (imageInfo) => {
    if (imageInfo.sil === true) 
    {
      console.log("silinecek",imageInfo.name);
      var yeni = this.state.buttonList.filter(
        (item) => item.props.isim !== imageInfo.name
      );
      this.setState({buttonList:yeni});
      console.log("yeni list", yeni);
    } 
    else {
      console.log("oluşan", imageInfo);
      const k = this.state.key + 1;

      this.state.buttonList.push(
        <ImageChoose
          handleFileUpload={this.handleFileUpload}
          imageFile={imageInfo.file}
          imagePath={imageInfo.path}
          deleteImage={this.deleteImage}
          isim={imageInfo.file.name}
          key={k}
        />
      );
      this.setState({
        key: k,
      });
    }
  };

  handleFileUpload = async (event) => {
    var imgPath = URL.createObjectURL(event.target.files[0]);
    var imgFile = event.target.files[0];
    this.state.imageFileList.push(imgFile);

    const imageInfo = {
      path: imgPath,
      file: imgFile,
    };
    this.createButton(imageInfo);
  };

  deleteImage = async (event) => {
    var name = event.target.name;

    var sonuc = this.state.imageFileList.filter((image) => image.name !== name);
    this.setState({ imageFileList: sonuc });
    console.log("name",name);
    const imageInfo={
        sil:true,
        name:name
    }
    this.createButton(imageInfo);
  };

  render() {
    const imageList = [];
    console.log("butonlst", this.state.buttonList);

    this.state.buttonList.map(item=>(console.log("isisisi",item.props.isim)))


    console.log("imgFileList", this.state.imageFileList);
    this.state.buttonList.map((image, i) => {
      imageList.push(
        <div className="col-lg-4 col-md-6" key={i}>
          {image}
        </div>
      );
    });
    return (
      <div>
        <section className="banner-area organic-breadcrumb" />
        <div>
          <input
            accept="image/*"
            id="icon-button-file"
            onChange={this.handleFileUpload}
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

        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="row">{imageList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
