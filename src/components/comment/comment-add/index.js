import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CommentActions from "../../../redux/comment/commentActions";
import { Alert, AlertTitle } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function AlertTime(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class index extends Component {
  state = {
    content: "",
    control: false,
    controlMessage: "",
    open: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ control: false });
  };

  handleSave = async (event) => {
    if (this.state.content !== "") {
      this.props.actions.createComment({
        content: this.state.content,
        userId: "c6bfdebd-2c5f-48ff-b97c-6a528da23814",
        productId: this.props.productId,
      }); 
      this.setState({ open: true });
    } else {
      this.setState({ control: true, controlMessage: "İçeriği doldurunuz." });
    }
    event.preventDefault();
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
    window.location.reload();
  };

  render() {
    return (
      <div className="col-lg-6"> 
        <div className="review_box">
          <h4>Yorum Ekle</h4>
          <p>Your Rating:</p>
          <p>Outstanding</p>
          {this.state.control === true ? (
            <Alert severity="error">
              <AlertTitle>UYARI</AlertTitle>
              İçeriği doldurunuz.
            </Alert>
          ) : (
            <div />
          )}
          {this.props.commentReducer.successfulComment === 1 ? (
            <Snackbar
              open={this.state.open}
              autoHideDuration={2000}
              onClose={this.handleClose}
            >
              <AlertTime
                style={{ width: "400px", fontSize: "20px" }}
                onClose={this.handleClose}
                severity="success"
              >
                Yorum Eklendi
              </AlertTime>
            </Snackbar>
          ) : (
            <div />
          )}
          <form className="row contact_form">
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows={1}
                  placeholder="içerik"
                  defaultValue={""}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-md-12 text-right">
              <button onClick={this.handleSave} className="primary-btn">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentReducer: state.CommentReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createComment: bindActionCreators(CommentActions.createComment, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
