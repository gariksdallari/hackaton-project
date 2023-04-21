import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logos/logo.png";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user";
import { currentUser } from "../../store/user/user";
import { BsCartCheck } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);

  const onCheckout = () => {
    dispatch(setCurrentUser(null))
  };

  return (
    <Fragment>
      <nav className={classes.container}>
        <Link to="/" className={classes.logoContainer}>
          <img className={classes.logo} src={Logo} alt="" />
        </Link>
        <Link className={classes.item} to="/shop">
          SHOP
        </Link>
        <Link className={classes.item} to="/checkout">
          CHECKOUT
        </Link>
        <Link className={classes.item} to="/auth">
          JOIN US
        </Link>
        <Link className={classes.item} to="/contactus">
          CONTACT US
        </Link>
        <div>{user && <span className={classes.greeting}>Welcome {user.name} <GoSignOut onClick={onCheckout} style={{marginLeft: '10px', cursor: 'pointer'}} size={20} color="black"/></span>}</div>
        <Link to="/checkout">
          <BsCartCheck className={classes.cart} size={30} color="000" />
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
