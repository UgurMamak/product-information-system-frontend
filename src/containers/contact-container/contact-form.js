import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import * as ContactActions from "../../redux/contact/contactActions";
class ContactForm extends Component {
  state = {
    name: "",
    subject: "",
    mail: "",
    content: "",
    file: null,
    control: false,
    controlMessage: "",
    fileName: "Dosya Yükle",
    open: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFileUpload = async (event) => {
    console.log("geldi");
    this.setState({ file: event.target.files[0] });
    this.setState({ fileName: event.target.files[0].name });
  };
  /*
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
    window.location.reload();
  };*/

  handleSave = async (event) => {
    if (
      this.state.mail !== "" &&
      (this.state.subject !== "") & (this.state.name !== "")
    ) {
      const data = new FormData();
      data.append("name", this.state.name);
      data.append("mail", this.state.mail);
      data.append("subject", this.state.subject);
      data.append("content", this.state.content);
      data.append("file", this.state.file);
      this.props.actions.createMail(data);
      this.setState({ open: true });
    } else {
      this.setState({
        control: true,
        controlMessage: "!!!Değerleri boş bırakmayınız.!!!",
      });
    }
    event.preventDefault();
  };
  render() {
    console.log("contact", this.props.contact);

    return (
      <div className="register-form">
        <h3 className="billing-title text-center">İLETİŞİM</h3>
        {this.props.contact.contactStatus === 1 ? (
          <Alert severity="success">
            <AlertTitle>UYARI</AlertTitle>
            {this.props.contact.message}
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
        <form>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Adınız ve Soyadınız*"
            required
            className="common-input mt-20"
          />
          <input
            type="email"
            name="mail"
            onChange={this.handleChange}
            placeholder="Email adresiniz*"
            required
            className="common-input mt-20"
          />
          <input
            type="text"
            name="subject"
            onChange={this.handleChange}
            placeholder="Mesaj Konusu*"
            required
            className="common-input mt-20"
          />

          <input
            accept="image/*"
            id="icon-button-file"
            onChange={this.handleFileUpload}
            className="common-input mt-20"
            type="file"
          />
          <textarea
            placeholder="Message"
            className="common-input mt-20"
            name="content"
            required
          ></textarea>
          <br />
          <button
            onClick={this.handleSave}
            className="view-btn color-2 mt-20 w-100"
          >
            <span>Gönder</span>
          </button>
        </form>{" "}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    contact: state.ContactReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createMail: bindActionCreators(ContactActions.createMail, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
