import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div>
        <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Hakkımızda</h6>
                <p>
                 Satın almak istediğin ürün hakkındaki yorumları okuyarak fikir sahibi olabilirsin.
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>İletişim</h6>
       
                <div  id="mc_embed_signup">
                 
                    <div className="d-flex flex-row">
                      <input className="form-control" name="EMAIL" placeholder="Enter Email"   required type="email" />
                      <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
                      <div style={{position: 'absolute', left: '-5000px'}}>
                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
                      </div>
                     
                    </div>
                    <div className="info" />
                
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">Instragram Feed</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Bizi takip et</h6>
               
                <div className="footer-social d-flex align-items-center">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-dribbble" /></a>
                  <a href="#"><i className="fa fa-behance" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
            
          </div>
        </div>
        </footer>
      </div>
    );
  }
}
