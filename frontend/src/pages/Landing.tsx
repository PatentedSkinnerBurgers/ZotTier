import "../assets/css/pages.css";
import { Link } from "react-router-dom";
import LandingDecor from "../assets/svg/LandingDecor";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="flex flex-1 h-screen min-h-[300px] px-10 pt-10 landing-gradient">
      <div className="absolute top-0 left-0 w-full h-full p-20 pointer-events-none">
        <LandingDecor />
      </div>
      {/* LEFT */}
      <div className="relative z-10 flex flex-col items-start justify-center w-1/2 gap-3 text-zt-light">
        <h1 className="text-5xl font-medium leading-[1.2] font-urbanist">
          Empowering tier lists with <span className="header-zero">Zero</span>{" "}
          bias.
        </h1>
        <p className="pb-2 text-lg font-rubik text-neutral-500">
          ZOT your vote with some text that will be written soon to come for
          Anteaters, by Anteaters.
        </p>
        <Link
          to="browse"
          className="px-6 py-3 text-lg transition-all duration-500 rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-800 hover:to-fuchsia-900"
        >
          Discover What's Trending
        </Link>
      </div>
      {/* RIGHT */}
    </div>
  );
};

export default Landing;
