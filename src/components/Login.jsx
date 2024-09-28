import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utilis/validate";
import {
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { AVATAR, BG_URL } from "../utilis/constant";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)

  const handleButton = () => {
    // Check if the refs are not null
    if (email.current && password.current) {
      const message = checkValidate(
        email.current.value,
        password.current.value, // Use optional chaining for the name ref
        name.current.value
      );

      setErrorMessage(message);
      if (message) return;

      if (!isSignInform) {
        // Sign up form
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
          name.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
           console.log(user);
            //
            updateProfile(auth.currentUser, {
              displayName: name.current.value , photoURL: AVATAR
            }).then(() => {
              // Profile updated!
              //dispacth the action as it will update store once again
              const { uid, email, displayName , photoURL } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL }));
            }).catch((error) => {
              setErrorMessage(error.message)
              // ...
            });
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      } else {
        // Sign in form
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      }
    } else {
      setErrorMessage("Email and Password fields cannot be null.");
    }
  };

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
          src={BG_URL}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form
          className="w-3/12 p-16  rounded-md bg-black bg-opacity-75"
          onSubmit={(e) => {
            e.preventDefault();
            handleButton();
          }}
        >
          <p className="px-2 mx-2 my-3 font-bold text-4xl text-white">
            {isSignInform ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInform && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-3 m-2 mx-3 w-full border-2 rounded-md text-white border-gray-600 bg-opacity-75 bg-black"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Mobile number"
            className="p-3 m-2 mx-3 w-full border-2 rounded-md text-white border-gray-600 bg-opacity-75 bg-black"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 mx-3 w-full border-2 rounded-md text-white border-gray-600 bg-opacity-75 bg-black"
          />
          <p className="pl-3 text-red-600 font-semibold text-lg ">
            {errorMessage}
          </p>
          <button
            className="p-3 m-2 mx-3 w-full rounded-md bg-[#E50914] hover:bg-red-700 cursor-pointer text-xl font-semibold text-white"
            type="submit"
          >
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>

          <span className="text-white mx-3  ">
            New to Netflix?
            <span
              onClick={Togglehandler}
              className="font-semibold cursor-pointer pl-1 contain-inline-size   "
            >
              Sign up <span className="pl-3">now.</span>
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
