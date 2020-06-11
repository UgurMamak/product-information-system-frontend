import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <section className="banner-area organic-breadcrumb">
          <div className="container">
            <div className="breadcrumb-banner d-flex flex-wrap align-items-center">
              <div className="col-first">
                <h1>Shop Category page</h1>
                <nav className="d-flex align-items-center justify-content-start">
                  <a href="index.html">
                    Home
                    <i className="fa fa-caret-right" aria-hidden="true" />
                  </a>
                  <a href="category.html">Fashon Category</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
