import React, { Component } from "react";
import { API } from "../../helpers/api-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import * as UserActions from "../../redux/user/userActions";
import UserMenu from "../../components/user-menu";
//components
import Image from "./image";
class index extends Component {
  componentDidMount() {
    this.props.actions.getUser(localStorage.getItem("userId"));
  }
  state = {
    imageFile: null,
    imagePath: "",
    imageName: "",
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",

    control: false,
    controlMessage: "",

    open: false,
  };
  //Resim seç butonu
  handleFileUpload = async (event) => {
    this.setState({ imageFile: event.target.files[0] });
    this.setState({ imagePath: URL.createObjectURL(event.target.files[0]) });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({
      control: false,
      controlMessage: null,
    });
  };

  handleUpdate = (event) => {
    let imageName;
    this.props.user.userData.forEach((item) => {
      imageName = item.imageName;
    });

    if (
      (this.state.password1 !== "" && this.state.password2 === "") ||
      (this.state.password1 === "" && this.state.password2 !== "")
    ) {
      event.preventDefault();
      this.setState({
        control: true,
        controlMessage: "Parola alanlarını eksik doldurdunuz.",
      });
    } else {
      if (this.state.password1 === this.state.password2) {
        const data = new FormData();
        data.append("imageName", imageName);
        data.append("image", this.state.imageFile);
        data.append("password", this.state.password1);
        data.append("email", this.state.email);
        data.append("Id", localStorage.getItem("userId"));
        data.append("firstName", this.state.firstName);
        data.append("lastName", this.state.lastName);
        this.props.actions.updateUser(data);
        this.setState({ open: true });
        event.preventDefault();
      } else {
        event.preventDefault();
        this.setState({
          control: true,
          controlMessage: "Parola alanları eşleşmedi",
        });
      }
    }
    this.props.actions.getUser(localStorage.getItem("userId"));
  };

  render() {
    console.log("user", this.props.user);
    console.log("updateuser", this.props.updateUser);
    return (
      <div>
        <section className="banner-area organic-breadcrumb" />
        {localStorage.getItem("userId") !== null ? <UserMenu /> : ""}

        <div className="container">
          <br />

          {this.props.user.userData.map((user) => (
            <Image
              handleFileUpload={this.handleFileUpload}
              imageFile={this.state.imageFile}
              imagePath={
                this.state.imagePath === ""
                  ? API + "userImage/" + user.imageName
                  : this.state.imagePath
              }
              user={user}
              key={user.id}
            />
          ))}
        </div>
        <section className="tracking_box_area section_gap">
          <div className="container">
            <div className="tracking_box_inner">
              <form className="row tracking_form">
                <div className="col-md-12 form-group">
                  {this.props.updateUser.updateStatus === 1
                    ? window.location.reload()
                    : ""}
                  {this.props.updateUser.updateStatus === 0 ? (
                    <Alert severity="error">
                      <AlertTitle>UYARI</AlertTitle>
                      {this.props.updateUser.message}
                    </Alert>
                  ) : (
                    ""
                  )}
                  {this.state.control === true ? (
                    <Alert severity="error">
                      <AlertTitle>UYARI</AlertTitle>
                      {this.state.controlMessage}
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-md-12 form-group">
                  <input
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    rows={1}
                    placeholder="Ad.."
                    defaultValue={""}
                    onChange={this.handleChange}
                  />{" "}
                </div>
                <div className="col-md-12 form-group">
                  <input
                    className="form-control"
                    name="lastName"
                    id="lastName"
                    rows={1}
                    placeholder="Soyad.."
                    defaultValue={""}
                    onChange={this.handleChange}
                  />{" "}
                </div>
                <div className="col-md-12 form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    rows={1}
                    placeholder="email.."
                    defaultValue={""}
                    onChange={this.handleChange}
                  />{" "}
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password1"
                    id="password1"
                    rows={1}
                    placeholder="Parola.."
                    defaultValue={""}
                    onChange={this.handleChange}
                  />{" "}
                </div>
                <div className="col-md-12 form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    id="password2"
                    rows={1}
                    placeholder="Parola tekrar.."
                    defaultValue={""}
                    onChange={this.handleChange}
                  />{" "}
                </div>

                <div className="col-md-12 form-group">
                  <button onClick={this.handleUpdate} className="primary-btn">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.UserReducer,
    updateUser: state.UpdateUserReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(UserActions.getUser, dispatch),
      updateUser: bindActionCreators(UserActions.updateUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
