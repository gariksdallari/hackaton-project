import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
           <Link to='/home'>HOME</Link>
           <Link to='/shop'>SHOP</Link>
           <Link to='/checkout'>CHECKOUT</Link>
           <Link to='/auth'>AUTH</Link>
           <Link to='/contactus'>CONTACT US</Link>
           <Outlet/>
        </nav>
    )
}

export default Navigation;