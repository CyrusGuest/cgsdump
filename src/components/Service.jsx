import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck as faCircleCheckSolid } from "@fortawesome/free-solid-svg-icons";

const Service = ({ icon, title, description }) => {
  const [selected, setSelected] = useState(false);
  const { userInfo, setUserInfo } = useContext(AppContext);

  useEffect(() => {
    const services = [...userInfo.services];

    if (services.includes(title)) setSelected(true);
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
    <div
      className={`relative py-4 rounded-lg border-2 w-60 ${
        selected ? "border-primary" : "border-gray-200"
      } cursor-pointer`}
      onClick={toggleSelected}
    >
      {selected ? (
        <FontAwesomeIcon
          className="absolute h-6 top-2 right-2 text-accent"
          icon={faCircleCheckSolid}
        />
      ) : (
        <FontAwesomeIcon
          className="absolute h-6 top-2 right-2 text-gray-200"
          icon={faCircle}
        />
      )}

      <div className="flex flex-col">
        <FontAwesomeIcon
          className="h-9 mt-4 border-gray-200 border-2 w-9 mx-auto p-2 rounded-lg"
          icon={icon}
        />

        <h3 className="text-center mt-2 font-bold">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default Service;
