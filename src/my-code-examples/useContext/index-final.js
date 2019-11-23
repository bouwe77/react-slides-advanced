import React, { useState, useContext } from "react";
import styles from "./Context.module.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Blink from "react-blink-tag";

let CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [nrOfProductsInCart, setNrOfProductsInCart] = useState(0);

  function addToCart(product) {
    setCart([...cart, product]);
    setNrOfProductsInCart(cart.length + 1);
  }

  console.log({ cart });

  return (
    <div className={styles.app}>
      <CartContext.Provider value={{ cart, nrOfProductsInCart, addToCart }}>
        <Router>
          <Header />
          <Webshop />
        </Router>
        <hr />
        <div className={styles.footer}> copyright &copy; shop.com</div>{" "}
      </CartContext.Provider>
    </div>
  );
}

function Webshop() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Products />
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

function Products() {
  const products = getProducts();
  return (
    <>
      <h3>Products</h3>
      {products.map(product => (
        <Product key={product.name} name={product.name} price={product.price} />
      ))}
    </>
  );
}

function Product({ name, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.product}>
      <h3 className={styles["product-name"]}>{name} </h3>
      {price && `€ ${price},-`}
      {addToCart && <button onClick={() => addToCart(name)}>+🛒</button>}
    </div>
  );
}

function ShoppingCartCounter() {
  const { nrOfProductsInCart } = useContext(CartContext);

  return (
    <span className={styles.count}>
      🛍{nrOfProductsInCart > 0 && `(${nrOfProductsInCart})`}
    </span>
  );
}

function ShoppingCart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h3>Shopping Cart</h3>
      <Blink speed="slow" fade>
        <span class={styles.red}> Spot the bug 😉</span>
      </Blink>
      {cart && cart.map(product => <Product name={product} />)}
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
