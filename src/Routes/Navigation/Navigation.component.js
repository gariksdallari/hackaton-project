import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logos/logo.png";
import { Fragment } from "react";
import { BsCartCheck } from "react-icons/bs";
import classes from "./Navigation.module.css";

const Navigation = () => {
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
        <Link to="/checkout">
        <BsCartCheck className={classes.cart} size={30} color="000"/>
        </Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
