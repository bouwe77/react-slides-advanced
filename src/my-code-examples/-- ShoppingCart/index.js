import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import ShoppingCartPage from "./ShoppingCartPage";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import ProductDetailPage from "./ProductDetailPage";
import AboutPage from "./AboutPage";
import { ShoppingCartProvider } from "./ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/products" exact>
              <ProductsPage />
            </Route>
            <Route path="/products/:productId">
              <ProductDetailPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCartPage />
            </Route>
          </Switch>
        </Router>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
