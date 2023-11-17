import "../assets/css/pages.css";
import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TierList } from "../types/tierlist";

type Props = {};

const fakeLists: TierList[] = [
  {
    id: 1,
    image: "https://photos.prnewswire.com/prnfull/20110719/LA37366",
    name: "JAMBA JUICE",
    numItems: 12,
    votes: 23,
  },
  {
    id: 2,
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/6/13/boba-milk-tea.jpg.rend.hgtvcom.1280.1280.suffix/1686684207354.jpeg",
    name: "Boba",
    numItems: 7,
    votes: 70,
  },
  {
    id: 3,
    image:
      "https://food.uci.edu/wp-content/uploads/sites/4/Logos/studentCenter.jpg",
    name: "On-Campus Dining Locations",
    numItems: 9,
    votes: 54,
  },
];

const Browse = (props: Props) => {
  const url: string = "";
  const [lists, setLists] = useState<TierList[]>([]);

  useEffect(() => {
    fetch("/")
      .then((res) => {
        if (res.ok) {
          console.log("Response ok");
          return fakeLists; // Change later
          // return res.json();
        } else {
          console.log("Could not fetch the lists");
        }
      })
      .then((everyList) => {
        if (everyList) {
          setLists(everyList);
          console.log(lists);
        }
      });
  }, [lists]);

  return (
    <div className="browse-gradient min-h-[300px] px-10 pt-20">
      <div className="max-w-[1024px] w-4/5 mx-auto">
        <h1 className="mt-8 mb-6 text-5xl text-white font-urbanist">
          Showing all tier lists
        </h1>
        {lists && (
          <div className="flex flex-col justify-center w-full gap-10">
            {lists.map((list: any, ind: number) => (
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
