import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const Togglehandler = () => {
    setIsSignInform(!isSignInform);
  };
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form className="w-3/12  p-16 rounded-md bg-black bg-opacity-75 ">
          <p className="px-2 mx-2 my-3 font-bold text-4xl text-white">
            {isSignInform ? "Sign In" : "Sign Up"}
          </p>
         {!isSignInform && <input
            type="text"
            placeholder="Name"
            className="p-3 m-2 mx-3  w-full border-2 rounded-md  border-gray-600 bg-opacity-75 bg-black"
          />}
          <input
            type="text"
            placeholder="Email or Mobile number"
            className="p-3 m-2 mx-3 w-full border-2 rounded-md  border-gray-600 bg-opacity-75 bg-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 mx-3 w-full border-2 rounded-md border-gray-600 bg-opacity-75 bg-black"
          />
          <button className="p-3 m-2 mx-3 w-full  rounded-md bg-[#E50914] hover:bg-red-700 cursor-pointer text-xl font-semibold text-white">
          {isSignInform ? "Sign In" : "Sign Up"}
          </button>
          <span className="text-white mx-3">
            New to Netflix?
            <span
              onClick={Togglehandler}
              className="font-semibold  cursor-pointer mx-1 "
            >
              Sign up now.
            </span>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
