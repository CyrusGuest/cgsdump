import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const MobileService = ({ title }) => {
  const [selected, setSelected] = useState(false);
  const [output, setOutput] = useState(title);
  const { userInfo, setUserInfo } = useContext(AppContext);

  useEffect(() => {
    const services = [...userInfo.services];

    if (services.includes(title)) setSelected(true);

    if (title === "Website development") setOutput("Website dev.");
    if (title === "Brand management") setOutput("Brand manage.");
    if (title === "Analytics & Reporting") setOutput("Analytics");
  }, []);

  const toggleSelected = () => {
    let services = [...userInfo.services];

    if (selected) {
      const index = services.indexOf(title);
      services.splice(index, 1);

      const newUserInfo = { ...userInfo, services };
      setUserInfo(newUserInfo);
    } else {
      services.push(title);

      const newUserInfo = { ...userInfo, services };
      setUserInfo(newUserInfo);
    }

    setSelected(!selected);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={title}
        className="form-radio h-4 w-4 mr-1"
        onChange={toggleSelected}
        checked={selected}
      />
      <label htmlFor={title}>{output}</label>
    </div>
  );
};

export default MobileService;
