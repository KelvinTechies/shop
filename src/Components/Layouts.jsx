import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Home from "./Screens/Home";

function Layouts() {
  return (
    <>
      <div id="content-block">
        <Header />
        {/* <Home /> */}

        <Footer />
      </div>
    </>
  );
}

export default Layouts;
