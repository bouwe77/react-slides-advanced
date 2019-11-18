import React, { useState } from "react";
import styles from "./Context.module.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [nrOfProductsInCart, setNrOfProductsInCart] = useState(0);

  const addToCart = product => {
    setCart([...cart, product]);
    setNrOfProductsInCart(cart.length + 1);
  };

  console.log({ cart });

  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Webshop />
      </Router>
      <hr />
      <div className={styles.footer}> copyright &copy; shop.com</div>{" "}
    </div>
  );
}

function Webshop() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <ProductPage />
        </Route>
        <Route path="/cart" exact>
          <ShoppingCart />
        </Route>
      </Switch>
    </>
  );
}

function Header() {
  return (
    <>
      <NavLink to="/">
        <h2 className={styles.logo}>shop.com</h2>
      </NavLink>
      <NavLink to="/cart">
        <ShoppingCartCounter />
      </NavLink>
      <hr />
    </>
  );
}

function ProductPage() {
  const products = getProducts();
  return (
    <>
      <h3>Products</h3>
      {products.map(product => (
        <Product name={product.name} price={product.price} />
      ))}
    </>
  );
}

function Product({ name, price, addToCart }) {
  return (
    <div className={styles.product}>
      <h3 className={styles["product-name"]}>{name} </h3>
      {price && `€ ${price},-`}
      {addToCart && <button onClick={() => addToCart(name)}>+🛒</button>}
    </div>
  );
}

function ShoppingCartCounter({ nrOfProductsInCart }) {
  return (
    <span className={styles.count}>
      🛍{nrOfProductsInCart > 0 && `(${nrOfProductsInCart})`}
    </span>
  );
}

function ShoppingCart({ productsInCart }) {
  return (
    <>
      <h3>Shopping Cart</h3>
      {productsInCart && productsInCart.map(product => <Product name={product} />)}
    </>
  );
}

function getProducts() {
  return [
    { name: "Zenhottip XL", price: 299 },
    { name: "Coftone 2", price: 99 },
    { name: "Unatrax Unlimited", price: 249 },
    { name: "Vento Dox", price: 199 },
    { name: "Namfan Y5T", price: 999 }
  ];
}

export default () => <App />;
