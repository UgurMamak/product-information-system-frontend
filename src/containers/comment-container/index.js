import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//component
import CommentList from "../../components/comment/comment-list";
import CommentAdd from "../../components/comment/comment-add";
import Pagination from "../../components/paginiton/Paginition";

class index extends Component {
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
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Yorum Ekle
                </a>
              </li>
            </ul>
            {this.props.productReducer.productDetail.map((comment) => (
              <div
                className="tab-content"
                id="myTabContent"
                key={comment.productId}
              >
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <br />

                  <div className="row">
                    <CommentList
                      productPoint={this.props.productPoint}
                      comment={this.state.pageOfItems}
                      productId={comment.productId}
                    />
                  </div>
                  <Pagination
                    items={comment.commentDtos}
                    onChangePage={this.onChangePage}
                  />
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <CommentAdd productId={comment.productId} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productReducer: state.ProductReducer,
  };
}

export default connect(mapStateToProps, null)(index);
