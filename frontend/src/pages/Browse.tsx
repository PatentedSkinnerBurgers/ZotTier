import "../assets/css/pages.css";
import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TierList } from "../types/tierlist";

type Props = {};

const Browse = (props: Props) => {
  const url: string = "";
  const [lists, setLists] = useState<TierList[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT_URL}/tierlist-browse`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLists(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen px-10 pt-20 browse-gradient">
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
