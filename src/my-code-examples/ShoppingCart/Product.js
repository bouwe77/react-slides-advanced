import React from "react";
import { getProducts } from "../Routing/api";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "../Routing/Routing.module.css";
import { useShoppingCart } from "./ShoppingCartContext";

export function Product({ product }) {
  const { addToShoppingCart } = useShoppingCart();

  return (
    <>
      <h2>
        <NavLink to={`/products/${product.id}`} className={styles.link}>
          {product.name}
        </NavLink>
      </h2>
      <div>
        <i>{product.description}</i>
        <p>
          &euro; {product.price},-{" "}
          <i onClick={() => addToShoppingCart(product)}>
            <FontAwesomeIcon icon={faCartPlus} color="darkgreen" />
          </i>
        </p>
      </div>
    </>
  );
}

export function useProducts(category) {
  return getProducts(category);
}

export default Product;
