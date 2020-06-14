import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserInfo from "./user-info";
import Pagination from "../../components/paginiton/Paginition";
import ProductCart from "../../components/product-cart";
import * as ProductCartActions from "../../redux/product-cart/productCartActions";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];
class index extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      anchorEl: null,
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentDidMount() {
    this.props.actions.getProductCart(this.props.match.params.userId);
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  state = { anchorEl: null, isOpen: false, anchorEl: null };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = async (product) => {
    this.setState({ anchorEl: null });
    // console.log("tıklandı", event.currentTarget);
    console.log("deger", product);
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const open = Boolean(this.state.anchorEl);
    console.log("cartbilgi", this.props.productCart.popularProduct);
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />

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
                                this.handleClose(product.productName)
                              }
                            >
                              Sil
                            </DropdownItem>
                            <DropdownItem
                              onClick={() =>
                                this.handleClose(product.productName)
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
                <Pagination
                  //items={this.state.exampleItems}
                  items={this.props.productCart.popularProduct}
                  onChangePage={this.onChangePage}
                />
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
    productCart: state.ProductCartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProductCart: bindActionCreators(
        ProductCartActions.getUserCart,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
