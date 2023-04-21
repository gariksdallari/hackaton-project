
 
import classes from './CheckoutItem.module.css';

const CheckoutItem = ({item}) => {
  
  // console.log(items);
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} alt={item.name} src={item.image_url}/>
      <div className={classes.discription}>
        <div className={classes.name}>{item.name}</div>
        <div className={classes.quantity}></div>
      </div>
      <div className={classes.price}>${item.price}</div>
    </div>
  )
};

export default CheckoutItem;