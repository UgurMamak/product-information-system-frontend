import React, { Component } from "react";

//component
import CommentList from "../../components/comment/comment-list";
import CommentAdd from "../../components/comment/comment-add";
import Pagination from "../../components/paginiton/Paginition";
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <section className="product_description_area">
          <div className="container">
            <div className="tab-content" id="myTabContent">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Yorumlar
                  </a>
                </li>
              </ul>

              <div
                className="tab-pane fade show active"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <br />
                <div className="row">
                  <CommentList comment={this.state.pageOfItems} />

                  <CommentAdd />
                  <Pagination
                    items={this.props.comment}
                    onChangePage={this.onChangePage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
