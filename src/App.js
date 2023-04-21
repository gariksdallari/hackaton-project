import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import Home from "./Routes/Home/Home.component";
import Shop from "./Routes/Shop/Shop.component";
import Auth from "./Routes/Auth/Auth.component";
import ContactUs from "./Routes/Contactus/Contactus.component";

import Checkout from "./Routes/Checkout/Checkout.component";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
