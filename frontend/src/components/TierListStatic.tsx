import React from "react";

type Props = {};

type LetterColorMap = {
  label: string;
  color: string;
};

const letterColorMaps: LetterColorMap[] = [
  { label: "S", color: "#7A00C5" },
  { label: "A", color: "#2977AF" },
  { label: "B", color: "#127652" },
  { label: "C", color: "#7F543B" },
  { label: "D", color: "#682D3C" },
  { label: "F", color: "#1C1C1C" },
];

const TierListStatic = (props: Props) => {
  return (
    <div className="flex flex-col w-full gap-1 p-1 bg-slate-400 backdrop-blur-sm bg-opacity-10 rounded-2xl">
      <>
        {letterColorMaps.map(({ label, color }) => {
          return (
            <div key={`row-${label}`} className="flex gap-2 p-1">
              {/* Label */}
              <div
                className="flex items-center justify-center w-20 h-20 border-2 border-[rgba(118,118,118,0.25)] rounded-lg"
                style={{ backgroundColor: `${color}` }}
              >
                <span className="text-5xl font-semibold text-zt-light">
                  {label}
                </span>
              </div>
              {/* Items */}
              <div className="flex-1 border-2 border-[rgba(118,118,118,0.25)] rounded-lg bg-slate-300 bg-opacity-5"></div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default TierListStatic;
