import { useState, Fragment } from "react";
import Feed from "../../assets/datafeed/datafeed.json";

import Product from "../../Components/Product/Product.component";

import classes from "./Shop.module.css";

const Shop = () => {
  const [query, setQuery] = useState("");

  return (
    <Fragment>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          placeholder="Search Products"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className={classes.container}>
        {Feed.filter((product) => {
          if (query === "") {
            return product;
          } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
            return product;
          }
        }).map((product) => {
          return <Product key={product.sku} product={product} />;
        })}
      </div>
    </Fragment>
  );
};

export default Shop;
