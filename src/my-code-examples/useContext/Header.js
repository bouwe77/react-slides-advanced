import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import styles from "../Routing/Routing.module.css";
import { useShoppingCart } from "./ShoppingCartContext";

export default () => {
  const { numberOfProducts } = useShoppingCart();

  return (
    <div className={styles.header}>
      <div>
        <NavLink to="/" className={styles.logo}>
          Crap Shop
        </NavLink>
      </div>
      <div>
        <ul className={styles.nav}>
          <li className={styles.navitem}>
            <NavLink to="/products" exact activeClassName={styles.active}>
              Products
            </NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink to="/about" activeClassName={styles.active}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.cartheader}>
        <i>
          <NavLink to="/shopping-cart">
            <FontAwesomeIcon icon={faShoppingCart} color="darkgreen" />({numberOfProducts})
          </NavLink>
        </i>
      </div>
    </div>
  );
};
