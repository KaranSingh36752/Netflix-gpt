import { React, useEffect, useState } from "react";
import { LOGO, SUPPORTED_LANG } from "../utilis/constant";
import { VscSignOut } from "react-icons/vsc";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utilis/userSlice";
import { GoSearch } from "react-icons/go";
import { toggleGptSearch } from "../utilis/gptSlice";
import { changeLang } from "../utilis/configSlice";
import lang from "../utilis/languageConstants";
import { RxCross1 } from "react-icons/rx";
import useGptSearch from "../hooks/useGptSearch";
import { SiGooglegemini } from "react-icons/si";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState(""); // Use useState to track input value
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const toggleSearch = useSelector((store) => store.gpt.showGptSearch);
  const { handleGptSearchClick } = useGptSearch(); // We no longer need to pass searchText as a ref

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
      });
  };

  const handleSearch = () => {
    setSearchActive(!searchActive);
    dispatch(toggleGptSearch());
  };

  const handleLangChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full pl-28 py-3 bg-gradient-to-b flex justify-between from-black z-50">
      <img className="w-52" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 pt-4">
          {toggleSearch ? (
            <div className="flex mr-3 pr-1 mb-0 pb-0 h-12 rounded-md bg-black opacity-90 border-2 border-gray-400">
              <div className="pb-0 mb-0 flex">
                <SiGooglegemini className="text-white text-xl mt-3 ml-2"/>
                <input
                  type="text"
                  placeholder={lang[langKey].placeHolder}
                  className="bg-black text-white p-2 w-72 opacity-100 font-bold"
                  value={searchText} // Bind input value to state
                  onChange={(e) => setSearchText(e.target.value)} // Update state on input change
                />
              </div>
              <div className="pt-3 pb-0 mb-0">
                <button
                  className="text-white text-2xl px-1 font-semibold focus:outline-none"
                  onClick={() => handleGptSearchClick(searchText)} // Pass searchText directly
                >
                  <GoSearch />
                </button>

                <button
                  onClick={handleSearch}
                  className="text-white text-2xl font-semibold focus:outline-none"
                >
                  <RxCross1 />
                </button>
              </div>
            </div>
          ) : (
            <div className="-pt-3">
              <button
                onClick={handleSearch}
                className="text-white text-3xl p-2 focus:outline-none"
              >
                <GoSearch />
              </button>
            </div>
          )}

          <img
            className="w-10 h-10 rounded-sm"
            src={user?.photoURL}
            alt="userlogo"
          />
          <button onClick={handleSignOut} className="pl-1 w-12 h-12 relative">
            <div className="flex justify-center text-xl text-white lg:text-3xl">
              <VscSignOut />
            </div>
          </button>
          <select
            className="bg-black text-white font-bold w-12 h-6"
            onChange={handleLangChange}
          >
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Header;
