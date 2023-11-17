import "../assets/css/pages.css";
import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TierList } from "../types/tierlist";
import cn from "classnames";
import { GrSort } from "react-icons/gr";

type Props = {};

const TABS: string[] = ["Default", "Popularity", "A-Z", "Items"];

const Browse = (props: Props) => {
  const [lists, setLists] = useState<TierList[]>([]);
  const [sortedLists, setSortedLists] = useState<TierList[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT_URL}/tierlist-browse`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLists(data);
        setSortedLists(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="h-full min-h-screen px-5 pt-20 md:px-10 browse-gradient">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none svg-pattern" />
      <div className="max-w-3xl mx-auto md:w-4/5">
        <h1 className="mt-8 mb-3 text-3xl text-zt-light font-urbanist">
          Browsing all tier lists
        </h1>
        <span className="flex items-center gap-2 mb-1 text-neutral-400">
          <GrSort className="text-xl" />
          <span>Sort by</span>
        </span>
        <div className="p-1 pl-3 mb-6 bg-slate-400 backdrop-blur-sm bg-opacity-20 rounded-lg border-2 border-[rgba(118,118,118,0.1)]">
          <div className="flex flex-wrap items-center gap-2 font-semibold font-urbanist">
            {TABS.map((tab: string, index: number) => {
              return (
                <button
                  className={cn(
                    "text-neutral-300 px-3 py-2 bg-slate-500 bg-opacity-50 rounded-md transition-all duration-200 hover:bg-purple-300 hover:bg-opacity-20",
                    index === currentTab ? "bg-purple-700 bg-opacity-100" : "",
                  )}
                  onClick={() => {
                    let defaultLists = [...lists];
                    defaultLists.sort((l1: TierList, l2: TierList) => {
                      const {
                        itemCount: itemCount1,
                        id: id1,
                        name: name1,
                        totalVotes: totalVotes1,
                      } = l1;
                      const {
                        itemCount: itemCount2,
                        id: id2,
                        name: name2,
                        totalVotes: totalVotes2,
                      } = l2;

                      if (index === 1) {
                        if (totalVotes1 > totalVotes2) return -1;
                        if (totalVotes1 < totalVotes2) return 1;
                        return 0;
                      } else if (index === 2) {
                        if (name1 < name2) return -1;
                        if (name1 > name2) return 1;
                        return 0;
                      } else if (index === 3) {
                        if (itemCount1 < itemCount2) return -1;
                        if (itemCount1 > itemCount2) return 1;
                        return 0;
                      }

                      if (id1 < id2) return -1;
                      if (id1 > id2) return 1;
                      return 0;
                    });

                    setSortedLists(defaultLists);
                    setCurrentTab(index);
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
        {sortedLists && (
          <div className="flex flex-col justify-center w-full gap-10">
            {sortedLists.map((list: any, ind: number) => (
              <React.Fragment key={ind}>
                <Card cardList={list} />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
