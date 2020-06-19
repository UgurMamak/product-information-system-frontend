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
        <DialogContent>
          <form className="row contact_form">
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  rows={1}
                  placeholder="içerik"
                  defaultValue={this.props.content}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>
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
