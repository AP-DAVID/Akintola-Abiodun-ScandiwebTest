import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export class Routerr extends Component {
  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="overflow-y-auto overflow-x-hidden">
              <Category pathname="/" />
            </div>
          </Route>
          {/* Product page */}
          <Route path="/product/:id">
            <Product />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
          
          {/*Other Category pages */}
          <Route path="/:id">
            {" "}
            <div className="overflow-y-auto overflow-x-hidden">
              <Category/>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routerr;
