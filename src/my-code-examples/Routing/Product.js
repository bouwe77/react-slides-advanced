import React from "react";
import { getProducts } from "../Routing/api";
import { NavLink } from "react-router-dom";

import styles from "./Routing.module.css";

export function Product({ product }) {
  return (
    <>
      <h2>
        <NavLink to={`/products/${product.id}`} className={styles.link}>
          {product.name}
        </NavLink>
      </h2>
      <div>
        <i>{product.description}</i>
        <p>&euro; {product.price},- </p>
      </div>
    </>
  );
}

export function useProducts(category) {
  return getProducts(category);
}

export default Product;
