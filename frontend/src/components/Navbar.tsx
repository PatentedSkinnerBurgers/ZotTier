import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed w-full px-8">
      <div className="flex items-end justify-between w-full px-2 h-16 pt-2 pb-2 border-b-2 border-indigo-500 navbar text-zt-light font-urbanist max-w-[1440px] mx-auto">
        <Link to="/" className="text-2xl">
          ZotTier
        </Link>
        <button className="text-lg">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
