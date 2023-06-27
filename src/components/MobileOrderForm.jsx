import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import MobileService from "./MobileService";
import axios from "axios";

const MobileOrderForm = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const sendInquiry = async () => {
    if (userInfo.contactInfo.name === "")
      return alert("Please fill out all fields.");
    if (userInfo.contactInfo.email === "")
      return alert("Please fill out all fields.");
    if (userInfo.contactInfo.tel === "")
      return alert("Please fill out all fields.");
    if (userInfo.contactInfo.description === "")
      return alert("Please fill out all fields.");

    const inquiry = {
      contactInfo: userInfo.contactInfo,
      services: userInfo.services,
    };

    setLoading(true);

    const res = await axios.post(
      "https://api.brandingandbeyond.org/create-inquiry",
      inquiry
    );

    setLoading(false);

    if (res.status === 200) {
      setUserInfo({
        contactInfo: {
          name: "",
          email: "",
          tel: "",
          description: "",
        },
        services: [],
        completed: true,
      });
    }
  };

  if (userInfo.completed) return <Navigate to="/completed" />;

  if (loading)
    return (
      <div>
        <FontAwesomeIcon
          className="text-6xl text-primary flex mx-auto mb-96 animate-spin my-20"
          icon={faSpinner}
        />
      </div>
    );

  return (
    <div className="relative md:hidden px-4">
      <h1 className="text-3xl font-bold my-16">
        We'd love to <span className="text-gradient">collaborate</span>! Shoot
        us a message to get the ball rolling.
      </h1>

      <div className="flex flex-col gap-4 text-xl">
        <label className="font-bold text-primary" htmlFor="name">
          Name
        </label>
        <input
          className="text-2xl w-full placeholder-[#999999] border-b-2 border-black pb-2 outline-none"
          type="text"
          id="name"
          placeholder="Your name"
          value={userInfo.contactInfo.name}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              contactInfo: { ...userInfo.contactInfo, name: e.target.value },
            })
          }
        />

        <label className="font-bold text-primary" htmlFor="email">
          Email
        </label>
        <input
          className="text-2xl w-full placeholder-[#999999] border-b-2 border-black pb-2 outline-none"
          type="text"
          id="email"
          placeholder="Your email"
          value={userInfo.contactInfo.email}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              contactInfo: { ...userInfo.contactInfo, email: e.target.value },
            })
          }
        />

        <label className="font-bold text-primary" htmlFor="tel">
          Phone number
        </label>
        <input
          className="text-2xl w-full placeholder-[#999999] border-b-2 border-black pb-2 outline-none"
          type="tel"
          id="tel"
          placeholder="555-000-000"
          value={userInfo.contactInfo.tel}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              contactInfo: { ...userInfo.contactInfo, tel: e.target.value },
            })
          }
        />

        <label className="font-bold text-primary" htmlFor="description">
          Tell us a little about your business...
        </label>
        <textarea
          className="text-2xl w-full placeholder-[#999999] border-b-2 border-black pb-2 outline-none"
          type="text"
          id="description"
          placeholder="What you do, sell, make, etc"
          rows="3"
          value={userInfo.contactInfo.description}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              contactInfo: {
                ...userInfo.contactInfo,
                description: e.target.value,
              },
            })
          }
        />

        <h6 className="font-bold text-primary">Services</h6>

        <div className="grid grid-cols-2 grid-rows-3 text-base font-bold gap-y-3">
          <MobileService title="Lawn Mowing" />

          <MobileService title="Simple Edging" />

          <MobileService title="Weed & Pest Control" />

          <MobileService title="Shrub & Tree Trim" />

          <MobileService title="Mulch & Soil" />

          <MobileService title="Seasonal Fertilization" />
        </div>

        <button
          className="btn w-full bg-primary text-white mt-2"
          onClick={sendInquiry}
        >
          Send
        </button>
        <p className="text-sm text-center mb-16">
          We'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default MobileOrderForm;
