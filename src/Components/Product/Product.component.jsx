import classes from './Product.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/Cart/Cart';

const Product = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(`/shop/${product.sku}`);
  };
  const addToCartHandler = () => {
    // console.log('product added', product);
    dispatch(addProduct(product));
  };

  return (
    <div className={classes.wrapper}>
      <div onClick={onNavigate}>
        <img className={classes.image} src={product.image_url} alt={product.name}/>
        <div className={classes.discription}>
          <div className={classes.name}>{product.name}</div>
          <div className={classes.price} >{product.price} $</div>
        </div>
      </div>
      <div className={classes.button} onClick={addToCartHandler}>Add to cart</div>
    </div>
  )
};

export default Product;
