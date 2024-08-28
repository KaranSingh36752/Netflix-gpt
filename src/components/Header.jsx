import React from "react";
import { LOGO } from "../utilis/constant";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-36 py-3 bg-gradient-to-b from-black z-50">
      <img className="w-52" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
