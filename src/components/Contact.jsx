import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/fontawesome-free-solid";
import axios from "axios";

const Contact = () => {
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [content, setContent] = useState("");
  let [loading, setLoading] = useState(false);
  let [complete, setComplete] = useState(false);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const submitMessage = async (e) => {
    e.preventDefault();

    if (!validEmail.test(email)) {
      alert("please enter a valid email address");
      return;
    }

    setLoading(true);

    const res = await axios.post(
      "https://api.brandingandbeyond.org/api/v1/create-message",
      {
        email,
        subject,
        content,
      }
    );

    setLoading(false);

    if (res.status === 200) setComplete(true);

    setEmail("");
    setSubject("");
    setContent("");
  };

  if (complete)
    return (
      <div className="bg-primary drop-shadow-lg w-5/6 md:w-1/2 mx-auto my-20 pt-2 flex flex-col text-center text-white rounded-lg">
        <h1 className="text-5xl font-bold my-2">Contact us</h1>
        <p className="text-xl">
          We'll get back to you within one business day.
        </p>

        <div className="text-2xl my-20">
          <h1>Your message has been succesfully received!</h1>
          <Link to="/" className="font-bold underline">
            Return home
          </Link>
        </div>
      </div>
    );

  if (loading)
    return (
      <div className="bg-primary drop-shadow-lg w-5/6 md:w-1/2 mx-auto my-20 pt-2 flex flex-col text-center text-white rounded-lg">
        <h1 className="text-5xl font-bold my-2">Contact us</h1>
        <p className="text-xl">
          We'll get back to you within one business day.
        </p>

        <FontAwesomeIcon
          className="text-6xl animate-spin my-20"
          icon="fa-solid fa-spinner"
        />
      </div>
    );

  return (
    <div className="bg-primary drop-shadow-lg w-5/6 md:w-1/2 mx-auto my-20 py-6 flex flex-col text-center text-white rounded-lg">
      <h1 className="text-5xl font-bold my-2">Contact us</h1>
      <p className="text-xl max-w-xs mx-auto lg:max-w-md">
        We'll get back to you within one business day.
      </p>

      <form className="flex flex-col">
        <input
          className="rounded-lg drop-shadow-lg text-black text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="rounded-lg text-black shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="text"
          id="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className="rounded-lg text-black shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="text"
          rows="5"
          id="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          className="bg-white w-2/5 btn mx-auto my-8 glow-on-hover-transparent py-2 rounded-lg drop-shadow-lg font-bold text-xl transition-all"
          onClick={(e) => submitMessage(e)}
        >
          <span className="text-primary">send</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
