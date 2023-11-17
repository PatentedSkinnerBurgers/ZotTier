import "../assets/css/pages.css";
import { Link } from "react-router-dom";
import LandingDecor from "../assets/svg/LandingDecor";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="landing-gradient h-screen min-h-[300px] px-10 pt-20 flex">
      <div className="max-w-[1280px] mx-auto flex lg:flex-row flex-col-reverse items-center justify-center lg:justify-start">
        <div className="absolute top-0 left-0 w-full h-full p-20 overflow-hidden pointer-events-none">
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none svg-pattern" />
          <LandingDecor />
        </div>
        {/* LEFT */}
        <div className="relative z-10 flex flex-col items-start justify-center w-full gap-3 md:w-1/2 text-zt-light">
          <h1 className="text-4xl md:text-5xl xl:text-6xl md:leading-[1.2] xl:leading-[1.2] font-medium leading-[1.2] font-urbanist">
            Empowering tier lists with <span className="header-zero">Zero</span>{" "}
            bias.
          </h1>
          <p className="pb-2 md:text-lg xl:text-xl font-rubik text-neutral-500">
            Tier lists aggregating the collective opinion of UCI. Curated by
            Anteaters, for Anteaters. ZOT your vote today.
          </p>
          <Link
            to="browse"
            className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-[rgba(90,90,90,0.5)] w-fit font-urbanist"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-900"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-800 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-lg text-zt-light">
              Discover What's Trending
            </span>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="relative w-full overflow-hidden md:w-1/2 md:-left-10 md:top-0 -top-4">
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
