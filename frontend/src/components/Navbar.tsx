import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="absolute top-0 left-0 w-full px-8">
      <div className="flex items-end justify-center w-full px-2 h-16 pt-2 pb-2 border-b-2 border-[rgba(250,250,250,0.0)] navbar text-zt-light font-urbanist max-w-[1280px] mx-auto">
        <Link to="/" className="flex text-3xl font-semibold">
          <span className="flex flex-col gap-[2px] py-2 mr-1">
            <span className="w-2 h-1 bg-purple-400 rounded-full"></span>
            <span className="w-2 h-1 rounded-full bg-sky-500"></span>
            <span className="w-2 h-1 rounded-full bg-emerald-600"></span>
            <span className="w-2 h-1 rounded-full bg-rose-700"></span>
          </span>
          ZotTier
        </Link>
        {/* <button className="text-lg">Sign in</button> */}
      </div>
      <hr className="bg-gradient-to-r from-purple-600 to-violet-400 h-[1px] border-0 opacity-50" />
    </nav>
  );
};

export default Navbar;
