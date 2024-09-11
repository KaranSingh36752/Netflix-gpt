import { React, useEffect } from "react";
import { LOGO } from "../utilis/constant";
import { VscSignOut } from "react-icons/vsc";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utilis/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full px-36 py-3 bg-gradient-to-b flex justify-between from-black z-50">
      <img className="w-52" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 pt-4">
          <img
            className="w-10 h-10 rounded-sm"
            src={user?.photoURL}
            alt="userlogo"
          />

          <button onClick={handleSignOut} className="pl-1 w-12 h-12 relative ">
            <div className="flex justify-center text-xl text-white lg:text-3xl">
              <VscSignOut />{" "}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
