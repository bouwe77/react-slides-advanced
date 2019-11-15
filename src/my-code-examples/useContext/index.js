import React, { useState } from "react";
import styles from "./Context.module.css";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
const showBoxes = false;

export default () => <App />;

const App = () => (
  <div className={styles.app}>
    <Router>
      <Header />
      <Webshop />
    </Router>
    <hr />
    <div className={styles.footer}> copyright &copy; shop.com</div>{" "}
  </div>
);

const Webshop = ({ children }) => {
  const [cart, setCart] = useState([]);
  const nrOfProductsInCart = cart.length;

  const addToCart = product => {
    setCart([...cart, product]);
  };

  //TODO Remove from cart
  //TODO Update quantity of product in cart

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Page />
        </Route>
        <Route path="/cart" exact>
          <ShoppingCart />
        </Route>
      </Switch>
    </>
  );
};

const Header = () => (
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

const Page = () => <Products />;

const Products = () => (
  <>
    <h3>Products</h3>
    <Product name="Zenhottip XL" price="299" />
    <Product name="Coftone 2" price="99" />
    <Product name="Unatrax Unlimited" price="249" />
    <Product name="Vento Dox" price="199" />
    <Product name="Namfan Y5T" price="999" />
  </>
);

const Product = ({ name, price, addToCart }) => (
  <div className={styles.product}>
    <h3 className={styles["product-name"]}>{name} </h3>
    {price && `€ ${price},-`}
    {addToCart && <button onClick={() => addToCart(name)}>+🛒</button>}
  </div>
);

const ShoppingCartCounter = ({ nrOfProductsInCart }) => (
  <span className={styles.count}>🛍{nrOfProductsInCart > 0 && `(${nrOfProductsInCart})`}</span>
);

const ShoppingCart = ({ productsInCart = ["Product 1", "Product 2"] }) => (
  <>
    <h3>Shopping Cart</h3>
    {productsInCart.map(product => (
      <Product name={product} />
    ))}
  </>
);
