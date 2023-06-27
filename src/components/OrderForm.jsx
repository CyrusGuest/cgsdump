import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import ServicesSection from "./get_started_components/ServicesSection";
import ContactSection from "./get_started_components/ContactSection";

const OrderForm = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [section, setSection] = useState(0); // ZERO-INDEXED, FIRST PAGE IS PAGE 0

  if (userInfo.completed) return <Navigate to="/completed" />;

  if (section === 0) return <ServicesSection setSection={setSection} />;

  if (section === 1) return <ContactSection />;
};

export default OrderForm;
