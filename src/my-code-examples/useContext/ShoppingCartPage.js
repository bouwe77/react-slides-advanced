import React, { useState } from "react";
import { useShoppingCart } from "./ShoppingCartContext";
import Product from "./Product";
import styles from "../Routing/Routing.module.css";

export default () => {
  const { products, numberOfProducts } = useShoppingCart();
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <h2>Shopping Cart</h2>
      {checkout ? (
        <Checkout />
      ) : numberOfProducts === 0 ? (
        <ShoppingCartEmpty />
      ) : (
        <ShoppingCartProducts />
      )}
    </>
  );

  function ShoppingCartProducts() {
    return (
      <>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
        <div>
          <button className={styles.checkout} onClick={() => setCheckout(true)}>
            Checkout
          </button>
        </div>
      </>
    );
  }

  function ShoppingCartEmpty() {
    return <p>Your shopping cart is empty</p>;
  }

  function Checkout() {
    return (
      <img
        src="https://media.giphy.com/media/5QVTEEmzIeTFOtKa4M/giphy.gif"
        alt="working..."
        width="500"
      />
    );
  }
};
