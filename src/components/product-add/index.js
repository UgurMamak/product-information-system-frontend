import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Button } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import ImageIcon from "@material-ui/icons/Image";
//component
import TypeSelect from "./type-select";
import CategoryChecked from "./category-checked";
import Image from "./image";
import * as ProductActions from "../../redux/product/productActions";
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

      buttonList: [],
      key: 0,
      imageFileList: [],
    };
    this.createButton = this.createButton.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  createButton = async (imageInfo) => {
    if (imageInfo.sil === true) {
      console.log("silinecek", imageInfo.name);
      var yeni = this.state.buttonList.filter(
        (item) => item.props.isim !== imageInfo.name
      );
      this.setState({ buttonList: yeni });
      console.log("yeni list", yeni);
    } else {
      console.log("oluşan", imageInfo);
      const k = this.state.key + 1;

      this.state.buttonList.push(
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
    console.log("name", name);
    const imageInfo = {
      sil: true,
      name: name,
    };
    this.createButton(imageInfo);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ control: false });
  };

  selectType = async (event) => {
    await this.setState({ productType: event.target.value });
    console.log("type tipi", this.state.productType); //save işlemiiçin
  };

  checkedChange = async (event) => {
    if (event.target.checked) {
      this.state.categories.push(event.target.name);
    } else {
      var array = [...this.state.categories]; // make a separate copy of the array
      var sonuc = await array.filter((item) => item !== event.target.name);
      this.setState({ categories: sonuc });
    }
    console.log("Kategoriler", this.state.categories);
  };

  handleSave = () => {
    if (
      this.state.productName !== "" &&
      this.state.content &&
      this.state.categories.length !== 0 &&
      this.state.productType !== "" &&
      this.state.imageFileList.length !== 0
    ) {
      const data = new FormData();
      data.append("ProductName", this.state.productName);
      data.append("Content", this.state.content);
      data.append("UserId", localStorage.getItem("userId"));
      data.append("ProductTypeId", this.state.productType);
      //data.append("ProductImages", this.state.imageFile);

      for (let i = 0; i < this.state.imageFileList.length; i++) {
        data.append("ProductImages", this.state.imageFileList[i]);
      }
      for (let i = 0; i < this.state.categories.length; i++) {
        data.append("Categories", this.state.categories[i]);
      }
      this.props.actions.createProduct(data);
    } else {
      this.setState({ control: true, controlMessage: "Boş Alan Bırakmayınız" });
    }
  };
 
  render() {
    const palette= {
      "color":"orange"
    }
    const imageList = [];
    console.log("butonlst", this.state.buttonList);

    this.state.buttonList.map((image, i) => {
      imageList.push(
        <div className="col-lg-4 col-md-6" key={i}>
          {image}
        </div>
      );
    });

    return (
      <div >
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                <h1>Ürün Ekle</h1>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
     
            <div className="col-xl-9 col-lg-8 col-md-7">
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
                    style={palette}
                    size="small"
                    aria-label="upload picture"
                    component="span"
                  >
                    <ImageIcon />
                    Resim seç
                  </IconButton>
                </label>
              </div>
              <div className="row">{imageList}</div>
            </div>
          </div>
        </div>

        <section className="tracking_box_area section_gap">
          <div className="container">
            <div className="tracking_box_inner">
              <div className="row tracking_form">
                <div className="col-md-12 form-group">
                  <TypeSelect
                    productType={this.state.productType}
                    selectType={this.selectType}
                  />
                </div>

                <div className="col-md-12 form-group">
                  <input
                    className="form-control"
                    name="productName"
                    id="productName"
                    rows={1}
                    placeholder="ürün adı"
                    defaultValue={""}
                    onChange={this.handleChange}
                  />{" "}
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    className="form-control"
                    name="content"
                    id="content"
                    rows={2}
                    placeholder="ürün açıklaması"
                    defaultValue={""}
                    onChange={this.handleChange}
                  />{" "}
                </div>
                <div className="col-md-12 form-group">
                  <CategoryChecked checkedChange={this.checkedChange} />{" "}
                </div>
                <div className="col-md-12 form-group">
                  {this.state.control === true ? (
                    <Alert severity="error">
                      <AlertTitle>UYARI</AlertTitle>
                      {this.state.controlMessage}
                    </Alert>
                  ) : (
                    <div />
                  )}

                  {this.props.productReducer.createStatus === 1 ? (
                    <Alert severity="success">
                      <AlertTitle>Başarılı</AlertTitle>
                      {this.props.productReducer.message}
                    </Alert>
                  ) : (
                    <div />
                  )}
                  {this.props.productReducer.createStatus === 0 ? (
                    <Alert severity="error">
                      <AlertTitle>İşlem Başarısız</AlertTitle>
                      {this.props.productReducer.message}
                    </Alert>
                  ) : (
                    <div />
                  )}
                </div>

                <div className="col-md-12 form-group">
                  <button onClick={this.handleSave} className="primary-btn">
                    Gönder
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createProduct: bindActionCreators(ProductActions.createProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
