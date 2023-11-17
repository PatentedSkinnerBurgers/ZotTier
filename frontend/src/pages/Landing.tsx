import "../assets/css/pages.css";
import { Link } from "react-router-dom";
import LandingDecor from "../assets/svg/LandingDecor";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="landing-gradient h-screen min-h-[300px] px-10 pt-20 flex">
      <div className="max-w-[1280px] mx-auto flex">
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
            Tier lists representing the collective opinion of UCI. Curated by
            Anteaters, for Anteaters. ZOT your vote today.
          </p>
          <Link
            to="browse"
            className="px-6 py-3 text-lg transition-all duration-500 rounded-lg bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-800 hover:to-fuchsia-900"
          >
            Discover What's Trending
          </Link>
        </div>
        {/* RIGHT */}
        <div className="relative w-1/2 overflow-hidden -left-10">
          <img
            src={process.env.PUBLIC_URL + "/images/landing-img.png"}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
