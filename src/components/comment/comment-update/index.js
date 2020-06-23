import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class index extends Component {
  state = {
    content: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ control: false });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"YORUM GÜNCELLE"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form className="row contact_form">
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="content"
                    id="content"
                    rows={6}
                    placeholder="içerik"
                    defaultValue={this.props.content}
                    onChange={this.handleChange}
                    style={{"width":"550px"}}
                  />
                </div>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.disAgreeUpdateProduct} color="primary">
            Vazgeç
          </Button>
          <Button
            onClick={() => this.props.agreeUpdateProduct(this.state.content)}
            color="primary"
            autoFocus
          >
            Güncelle
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
