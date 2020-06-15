import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProductActions from "../../redux/product/productActions";
import { API } from "../../helpers/api-config";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";
//component
import Image from "../product-add/image";

class index extends Component {
  constructor() {
    super();
    this.state = {
      productType: "",
      categories: [],
      productName: "",
      content: "",
      control: false,
      controlMessage: "",

      key: 0,
      imageFileList: [],
      newImage: [],

      oldImage: [], //db gelen imageleri yaratmak için
      oldImageName: [], //db den gelen imagelerin namelerini tutacak

      refresh: 0,
    };

    this.deleteImage = this.deleteImage.bind(this);
    this.oldCreateImage = this.oldCreateImage.bind(this);
  }
  componentDidMount() {
    this.props.actions.getProduct(this.props.match.params.productId);
  }

  oldCreateImage = (imageInfo) => {
    if (imageInfo.sil === true) {
      var yeni = this.state.oldImage.filter(
        (item) => item.props.isim !== imageInfo.name
      );
      this.setState({ oldImage: yeni });
    } else {
      if (this.state.refresh === 0) {
        console.log("bir kere geldi");
        this.props.productReducer.productDetail.map((item) =>
          item.productImageListDtos.map((image) =>
            this.state.oldImageName.push(image.imageName)
          )
        );
      }
      this.state.oldImageName.map((item, i) =>
        this.state.oldImage.push(
          <Image
            handleFileUpload={this.handleFileUpload}
            imagePath={API + "productImage/" + item}
            deleteImage={this.deleteImage}
            isim={item}
            key={i}
          />
        )
      );
    }
  };

  newCreateImage = async (imageInfo) => {
    this.setState({ refresh: 1 });
    if (imageInfo.sil === true) {
      console.log("silinecek", imageInfo.name);
      var yeni = this.state.newImage.filter(
        (item) => item.props.isim !== imageInfo.name
      );
      this.setState({ newImage: yeni });
      console.log("yeni list", yeni);
    } else {
      console.log("oluşan", imageInfo);
      const k = this.state.key + 1;

      this.state.newImage.push(
        <Image
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

  deleteImage = async (event) => {
    var name = event.target.name;
    var isthere = this.state.oldImageName.filter((item) => item === name);

    //dbden gelen işlem için
    if (isthere.length !== 0) {
      var sonuc = this.state.oldImageName.filter((image) => image !== name);
      const imageInfo = {
        sil: true,
        name: name,
      };
      this.setState({ oldImageName: sonuc });
      this.setState({ refresh: 1 });
      this.oldCreateImage(imageInfo);
    } else {
      var sonuc = this.state.imageFileList.filter(
        (image) => image.name !== name
      );
      this.setState({ imageFileList: sonuc });
      const imageInfo = {
        sil: true,
        name: name,
      };
      this.newCreateImage(imageInfo);
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
    this.newCreateImage(imageInfo);
  };

  updateProduct = () => {
    const data = new FormData();

    for (let i = 0; i < this.state.oldImageName.length; i++) {
      data.append("oldImageName", this.state.oldImageName[i]);
    }
    for (let i = 0; i < this.state.imageFileList.length; i++) {
        data.append("NewImages", this.state.imageFileList[i]);
      }
      data.append("id",this.props.match.params.productId);
      this.props.actions.updateProduct(data);
      console.log("mesaj",this.props.updateReducer);
  };

  render() {
    if (this.state.refresh === 0) {
      const imageInfo = {
        sil: false,
      };
      this.oldCreateImage(imageInfo);
    }

    const oldImageList = [];
    this.state.oldImage.map((image, i) => {
      oldImageList.push(
        <div className="col-lg-4 col-md-6" key={i}>
          {image}
        </div>
      );
    });

    const newImageList = [];
    this.state.newImage.map((image, i) => {
      newImageList.push(
        <div className="col-lg-4 col-md-6" key={i}>
          {image}
        </div>
      );
    });

    return (
      <div>
        <section className="banner-area organic-breadcrumb" />

        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7">
              <h1>Mevcut Resimler</h1>
              <div className="row">{oldImageList}</div>

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
                    size="small"
                    aria-label="upload picture"
                    component="span"
                  >
                    <ImageIcon />
                    Resim seç
                  </IconButton>
                </label>
              </div>
              <div className="row">{newImageList}</div>
            </div>
          </div>
        </div>

        <section className="tracking_box_area section_gap">
          <div className="container">
            <div className="tracking_box_inner">
              <div className="row tracking_form">
                <div className="col-md-12 form-group">
                  <button onClick={this.updateProduct} className="primary-btn">
                    Güncelle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productReducer: state.ProductReducer,
    updateReducer:state.ProductUpdateReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(ProductActions.getProductDetail, dispatch),
      updateProduct: bindActionCreators(ProductActions.updateProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
