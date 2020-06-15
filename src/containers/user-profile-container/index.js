import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//component
import UserInfo from "./user-info";
import Pagination from "../../components/paginiton/Paginition";
import ProductCart from "../../components/product-cart";
import AlertDialog from "../../components/alert-dialog";
import * as ProductCartActions from "../../redux/product-cart/productCartActions";
import * as ProductActions from "../../redux/product/productActions";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

class index extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      isOpen: false,
      alertOpen: false,
      productId: "",
      modalOpen: false,
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentDidMount() {
    this.props.actions.getProductCart(this.props.match.params.userId);
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  updateProduct = async (product) => {
    console.log("update", product);
  };

  deleteproduct = async (product) => {
    console.log("delete", product);
    this.setState({ productId: product });
    this.setState({ alertOpen: true });
  };

  agreeDeletePost = () => {
    this.setState({ alertOpen: false });
    const data = new FormData();
    data.append("id", this.state.productId);
    this.props.actions.deleteProduct(data);

    if (this.props.productReducer.deleteStatus === 0) {
      this.setState({ modalOpen: true });
    } else {
      window.location.reload();
    }
  };

  disAgreeDeletePost = () => {
    this.setState({ alertOpen: false });
    console.log("hayıra basldı");
  };
  modalClose = () => this.setState({ modalOpen: false });
  render() {
    console.log("cartbilgi", this.props.productCart.popularProduct);
    console.log("product", this.props.productReducer);

    return (
      <div>
        <section className="banner-area organic-breadcrumb" />
        <section className="tracking_box_area section_gap">
          <div className="container">
            <div className="tracking_box_inner">
              <UserInfo userId={this.props.match.params.userId} />
              <div className="row">
                {this.state.pageOfItems.map((product) => (
                  <div className="col-lg-4 col-md-6" key={product.productId}>
                    <CardHeader
                      action={ 
                        <UncontrolledDropdown>
                          <DropdownToggle tag="a" className="nav-link">
                            <MoreVertIcon />
                          </DropdownToggle>
                          <DropdownMenu size="sm">
                            <DropdownItem
                              onClick={() =>
                                this.deleteproduct(product.productId)
                              }
                            >
                              Sil
                            </DropdownItem>
                            <DropdownItem
                              onClick={() =>
                                this.updateProduct(product.productId)
                              }
                            >
                              Güncelle
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      }
                      subheader={product.created}
                    />

                    <ProductCart product={product} />
                  </div>
                ))}
              </div>
              <Pagination
                //items={this.state.exampleItems}
                items={this.props.productCart.popularProduct}
                onChangePage={this.onChangePage}
              />
            </div>
          </div>
        </section>

      
        <Modal
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.state.modalOpen}
          onClose={this.modalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.modalOpen}>
            <div
              style={{
                backgroundColor: "white",
                border: "2px",
                padding: "10px",
              }}
            >
              <h2 id="transition-modal-title">İşlem Hatası</h2>
              <p id="transition-modal-description">
              {this.props.productReducer.message}
              </p>
            </div>
          </Fade>
        </Modal>

        <AlertDialog
          open={this.state.alertOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disAgreeDeletePost={this.disAgreeDeletePost}
          agreeDeletePost={this.agreeDeletePost}
          message={"Ürünü Silmek istediğinizden emin misiniz?"}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productCart: state.ProductCartReducer,
    productReducer: state.ProductReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductCart: bindActionCreators(
        ProductCartActions.getUserCart,
        dispatch
      ),
      deleteProduct: bindActionCreators(ProductActions.deleteProduct, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);