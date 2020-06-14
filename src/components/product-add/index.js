import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
//component
import ImageChoose from "../image-input";
import TypeSelect from "./type-select";
import CategoryChecked from "./category-checked";
import * as ProductActions from "../../redux/product/productActions";
class index extends Component {
  state = {
    imageFile: null,
    imagePath: null,
    productType: "",
    categories: [],
    productName: "",
    content: "",
    control: false,
    controlMessage: "",
  };
  componentDidMount() {}
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ control: false });
  };
  handleFileUpload = async (event, userId) => {
    this.setState({ imageFile: event.target.files[0] });
    this.setState({ imagePath: URL.createObjectURL(event.target.files[0]) });
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
      this.state.imageFile !== null
    ) {
      const data = new FormData();
      data.append("ProductName", this.state.productName);
      data.append("Content", this.state.content);
      data.append("UserId", localStorage.getItem("userId"));
      data.append("ProductTypeId", this.state.productType);
      data.append("ProductImages", this.state.imageFile);
      for (let i = 0; i < this.state.categories.length; i++) {
        data.append("Categories", this.state.categories[i]);
      }
      this.props.actions.createProduct(data);
    } else {
      this.setState({ control: true, controlMessage: "Boş Alan Bırakmayınız" });
    }
  };

  render() {
    return (
      <div>
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
              <div className="col-first">
                <h1>Ürün Ekle</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="tracking_box_area section_gap">
          <div className="container">
            <div className="tracking_box_inner">
              <ImageChoose
                handleFileUpload={this.handleFileUpload}
                imageFile={this.state.imageFile}
                imagePath={this.state.imagePath}
              />

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
