import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import Product from "./components/Product";
import Cart from "./components/Cart";

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
              <Category />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routerr;
