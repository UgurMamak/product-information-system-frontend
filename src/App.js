import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import Deneme from "./components/Deneme"

//container
import HeaderContainer from "./containers/header-container"
import LoginRegisterContainer from "./containers/login-register-container"
import HomeContainer from "./containers/home-container"
import ContactContainer from "./containers/contact-container"
import FooterContainer from "./containers/footer-container"
import ProductDetailContainer from "./containers/product-detail-container/"

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <Switch>
        <Route exact path="/" render={() => <Redirect to="home" />} />
        <Route exact path="/home" component={HomeContainer} />
        <Route path="/login" component={LoginRegisterContainer} />
        <Route path="/contact" component={ContactContainer} />
        <Route path="/productDetail/:productId" component={ProductDetailContainer} />
        </Switch>
        <FooterContainer/>
      </div>
    )
  }
}
