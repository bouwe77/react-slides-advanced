import React from "react";
import ReactDOM from "react-dom";

import styles from "./styles.css";
import Footer from "./Footer";
import Slides from "./react-slides";
import slides from "./my-slides";

//const config = { appId: "appy", showButtonNavigation: true };

const App = () => (
  <div className={styles.app}>
    <Slides>{slides}</Slides>
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
