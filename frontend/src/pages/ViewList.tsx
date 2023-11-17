import "../assets/css/pages.css";
import React from "react";
import TierList from "../components/TierList";

type Props = {};

const title = "";

const ViewList = (props: Props) => {
  return (
    <div className="w-full min-h-screen pt-20 browse-gradient font-urbanist">
      <h1 className="max-w-[2048px] w-3/4 pb-5 mx-auto mt-8 mb-6 text-5xl text-white">
        Tier List: {title} awesome placeholder
      </h1>
      <div className="w-3/4 pb-5 mx-auto">
        <TierList />
      </div>
    </div>
  );
};

export default ViewList;
