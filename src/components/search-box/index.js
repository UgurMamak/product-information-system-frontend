import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              <span
                className="lnr lnr-cross"
                id="close_search"
                title="Close Search"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
