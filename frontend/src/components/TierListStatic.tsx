import React from "react";
import { TierListRowType } from "../pages/VoteList";
import TierListRow from "./TierListRow";

type TierListStaticProps = {
  rowContainerItems: TierListRowType[];
};

const TierListStatic = ({ rowContainerItems }: TierListStaticProps) => {
  return (
    <div className="flex flex-col w-full gap-1 p-1 bg-slate-400 backdrop-blur-sm bg-opacity-10 rounded-2xl border-2 border-[rgba(118,118,118,0.1)]">
      <>
        {rowContainerItems.map(({ label, color, items }) => {
          return (
            <div key={`row-${label}`} className="flex gap-2 p-1">
              {/* Label */}
              <div
                className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-[rgba(118,118,118,0.25)] rounded-lg"
                style={{ backgroundColor: `${color}` }}
              >
                <span className="text-5xl font-semibold text-zt-light">
                  {label}
                </span>
              </div>
              {/* Items */}
              <div className="flex-1 border-2 border-[rgba(118,118,118,0.25)] rounded-lg bg-slate-300 bg-opacity-5">
                <TierListRow label={label} items={items} isDraggable={false} />
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default TierListStatic;
