import { useSelector } from 'react-redux';
import {products} from '../../store/Cart/Cart'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.component';

import classes from './Checkout.module.css';

const Checkout = () => {
  const items = useSelector(products);
  const total  = items.reduce((total, item) => total + Number(item.price), 0);
  // console.log(total);

  return (
    <div className={classes.wrapper}>
      {items.map((item) => {
        return <CheckoutItem key={item.sku} item={item}/>
      })}
      <div className={classes.total}>
        <span className={classes.price}>Total Price:</span>
        <span className={classes.value}>{total}$</span>
      </div>
    </div>
  )
};

export default Checkout;
