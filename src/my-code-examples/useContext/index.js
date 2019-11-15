import React from "react";
import styles from "./Context.module.css";
const showBoxes = false;

export default () => <App />;

const App = () => (
  <Box name="App">
    <Container />
  </Box>
);

const Container = () => (
  <Box name="Container">
    <Header />
    <Page />
  </Box>
);

const Header = () => (
  <Box name="Header">
    <h2>shop.com</h2> <ShoppingCartCounter />
    <hr />
  </Box>
);

const Page = () => (
  <Box name="Page">
    <Products />
  </Box>
);

const Products = () => (
  <Box name="Products">
    <Product name="Zenhottip XL" />
    <Product name="Coftone 2" />
    <Product name="Unatrax Unlimited" />
    <Product name="Vento Dox" />
    <Product name="Namfan Y5T" />
  </Box>
);

const Product = ({ name }) => <Box name="Product">{name}</Box>;

const ShoppingCartCounter = () => <>🛍(2)</>;

const Box = ({ name, children }) => (
  <div className={showBoxes ? styles.box : null}>
    {showBoxes && name} {children}
  </div>
);
