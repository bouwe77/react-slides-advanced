import React from "react";
import Product, { useProducts } from "./Product";
import styles from "../Routing/Routing.module.css";

export default () => {
  const products = useProducts("sale");

  return (
    <>
      <p>
        <span className={styles.sale}> SALE SALE SALE!!!</span>
      </p>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
