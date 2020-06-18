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
import CategoryContainer from "./containers/category-container"
import UserProfileContainer from "./containers/user-profile-container"

import UserOperationContainer from "./containers/user-update-container"

//component
import Notfound from "./components/common/not-found"
import ProductAdd from "./components/product-add"
import ProductUpdate from "./components/product-update"
import Deneme from "./components/deneme/"
//import PrivateRoute from "./components/common/private-route";
import CategoryTypeOperation from "./components/category-type-operation"

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
        
        <Route exact path="/category" component={CategoryContainer}/>
        <Route exact path="/category/:categoryId" component={CategoryContainer}/>
        <Route exact path="/profile/:userId" component={UserProfileContainer}/>
        
        <Route exact path="/productAdd" component={ProductAdd}/>
        <Route exact path="/productUpdate/:productId" component={ProductUpdate}/>
        <Route exact path="/categoryOperation" component={CategoryTypeOperation}/>
        <Route exact path="/userUpdate/:userId" component={UserOperationContainer}/>
        
        <Route exact path="/deneme" component={Deneme}/>
        <Route component={Notfound} />
        </Switch>
        <FooterContainer/>
      </div>
    )
  }
}
