import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logos/logo.png";
import { Fragment } from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <nav className={classes.container}>
        <Link to="/" className={classes.logoContainer}>
          <img className={classes.logo} src={Logo} alt="" />
        </Link>
        <Link className={classes.item} to="/home">
          HOME
        </Link>
        <Link className={classes.item} to="/shop">
          SHOP
        </Link>
        <Link className={classes.item} to="/checkout">
          CHECKOUT
        </Link>
        <Link className={classes.item} to="/auth">
          AUTH
        </Link>
        <Link className={classes.item} to="/contactus">
          CONTACT US
        </Link>
        <Outlet />
      </nav>
    </Fragment>
  );
};

export default Navigation;
