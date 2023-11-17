import "../assets/css/pages.css";
import React from "react";
import { Link } from "react-router-dom";
import TierListStatic from "../components/TierListStatic";

type Props = {};

const title = "";

const ViewList = (props: Props) => {
  return (
    <div className="w-full min-h-screen pt-20 browse-gradient font-urbanist">
      <h1 className="max-w-[2048px] w-3/4 pb-5 mx-auto mt-8 mb-6 text-5xl text-white font-bold">
        Tier List: {title}
      </h1>
      <div className="flex justify-center mx-auto mt-8 mb-6 font-semibold">
        <Link
          to="../vote-list/1"
          className="w-3/4 px-12 py-3 pb-5 text-3xl text-center transition-all duration-500 rounded-lg text-zt-light bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-800 hover:to-fuchsia-900"
        >
          Make your own entry here
        </Link>
      </div>

      <div className="w-3/4 pb-5 mx-auto">
        <TierListStatic />
      </div>
    </div>
  );
};

export default ViewList;
