import Feed from '../../assets/datafeed/datafeed.json';

import Product from '../../Components/Product/Product.component';

import classes from './Shop.module.css';

const Shop = () => {
  return (
    <div className={classes.container}>
      {Feed.map((product) => {
        return <Product key={product.sku} product={product}/>
      })}
    </div>
  )
};

export default Shop;