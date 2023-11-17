import React from "react";

type Label = {
    letter: string,
    color: string,
};

const TierLabel = ({ letter, color} : Label) => {
  return (
    <label className="box-content h-40 w-40">
        {letter}
    </label>
  );
};

export default TierLabel;