import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Completed = () => {
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />
        <div className="max-w-xs md:max-w-2xl mx-auto mb-96">
          <h1 className="text-2xl font-bold text-center mt-20 mb-1">
            Thank you so much! We've received your inquiry. Expect to hear back
            from us within 24 hours.
          </h1>

          <p className="text-center text-sm text-gray-500 mb-16 mt-2">
            We'll likely contact you by email. Reminder- We'll never sell or
            distribute your personal data to anyone.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Completed;
