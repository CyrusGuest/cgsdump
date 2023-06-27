import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderForm from "../components/OrderForm";
import MobileOrderForm from "../components/MobileOrderForm";

const GetStarted = () => {
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />

        <MobileOrderForm />

        <OrderForm />

        <Footer />
      </div>
    </div>
  );
};

export default GetStarted;
