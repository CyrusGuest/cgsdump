import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="shadow-lg w-96 h-96 mx-auto my-20 md:my-36 pt-2 flex flex-col text-center text-white rounded-lg">
      <h1 className="text-5xl font-bold my-2">sign up</h1>
      <p>
        have an account already? <Link to="/signin">sign in</Link>
      </p>

      <form className="flex flex-col">
        <input
          className="rounded-lg drop-shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="rounded-lg drop-shadow-lg text-xl my-3 py-2 px-3 w-3/4 mx-auto bg-white outline-none"
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-white">don't worry, you can reset it later</p>

        <button
          className="bg-white w-2/5 mx-auto my-4 py-2 rounded-lg drop-shadow-lg font-bold text-xl transition-all"
          onClick={(e) => signUserUp(e)}
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
