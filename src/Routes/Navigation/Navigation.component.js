import { Link, Outlet } from "react-router-dom";
import  classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={classes.container}>
           <Link className={classes.item} to='/home'>HOME</Link>
           <Link className={classes.item} to='/shop'>SHOP</Link>
           <Link className={classes.item} to='/checkout'>CHECKOUT</Link>
           <Link className={classes.item} to='/auth'>AUTH</Link>
           <Link className={classes.item} to='/contactus'>CONTACT US</Link>
           <Outlet/>
        </nav>
    )
}

export default Navigation;