import React from "react";
import TierRow from "./TierRow";

type Props = {};


const TierList = (props: Props) => {
  return (
    <table className="">
        <TierRow></TierRow>
        <TierRow></TierRow>
        <TierRow></TierRow>
        <TierRow></TierRow>
        <TierRow></TierRow>
    </table>
  );
};

export default TierList;