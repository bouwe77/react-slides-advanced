import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Routing.module.css";

export default () => {
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
      <div className={styles.cartheader} />
    </div>
  );
};
