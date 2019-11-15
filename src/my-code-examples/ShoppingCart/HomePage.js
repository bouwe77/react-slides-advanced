import React from "react";
import Blink from "react-blink-tag";
import Product, { useProducts } from "./Product";
import styles from "../Routing/Routing.module.css";

export default () => {
  const products = useProducts("sale");

  return (
    <>
      <p>
        <Blink speed="slow" fade>
          <span className={styles.sale}> SALE SALE SALE!!!</span>
        </Blink>
      </p>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
