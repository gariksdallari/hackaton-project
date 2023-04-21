import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import Home from "./Routes/Home/Home.component";
import Shop from "./Routes/Shop/Shop.component";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" />
        <Route path="/auth" />
        <Route path="/contactus" />
      </Route>
    </Routes>
  );
}

export default App;
