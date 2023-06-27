import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ContactSection = () => {
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
    <div className="flex flex-col gap-4 text-xl max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-20 mb-1">
        Tell us a little more about yourself and we'll get the ball rolling.
      </h1>

      <p className="text-center text-gray-500 mb-16">
        Please fill out the information below. We'll never sell or distribute
        your personal data to anyone.
      </p>

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

      <button
        className="btn w-full bg-primary text-white mt-2"
        onClick={sendInquiry}
      >
        Send
      </button>
      <p className="text-sm text-center mb-16">
        We'll get back to you within 24 hours.
      </p>

      <div className="flex mx-auto gap-4">
        <div className="w-8 h-2 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-2 bg-accent rounded-lg"></div>
      </div>
    </div>
  );
};

export default ContactSection;
