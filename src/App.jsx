import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./Components/Layouts";
import Home from "./Components/Screens/Home";
import Index from "./Components/Index";
import Products from "./Components/Screens/Products";
import { ToastContainer } from "react-toastify";
import Checkout from "./Components/Screens/Checkout";
import Services from "./Components/Screens/Services";
import About from "./Components/Screens/About";
import Contact from "./Components/Screens/Contact";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            {<Route index element={<Index />} />}
            {<Route path="about" element={<About />} />}
            {<Route path="services" element={<Services />} />}
            {<Route path="contact" element={<Contact />} />}
            {<Route path="products" element={<Products />} />}
            {<Route path="checkout" element={<Checkout />} />}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </>
  );
}

export default App;
