import "../assets/css/pages.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TierListStatic from "../components/TierListStatic";
import { TierListRowType } from "./VoteList";
import { TierListItem } from "../types/tierlist";

type ViewListResponseIndex = {
  tierListId: number;
  name: string;
  numVotes: number;
  voteSum: number;
  imageUrl: string;
};

type Props = {};

const title = "";

const ViewList = (props: Props) => {
  let { id } = useParams();
  const [rowContainerItems, setRowContainerItems] = useState<TierListRowType[]>(
    [],
  );

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT_URL}/tierlist?id=${id}`)
      .then((response) => response.json())
      .then((data: ViewListResponseIndex[][]) => {
        console.log(data);

        const tierListRowTemplate: TierListRowType[] = [
          { label: "F", color: "#1C1C1C", items: [] },
          { label: "D", color: "#682D3C", items: [] },
          { label: "C", color: "#7F543B", items: [] },
          { label: "B", color: "#127652", items: [] },
          { label: "A", color: "#2977AF", items: [] },
          { label: "S", color: "#7A00C5", items: [] },
        ];

        let ithItemFound = 0;

        tierListRowTemplate.forEach((row: TierListRowType, i: number) => {
          const itemsOfThatTier = data[i];
          itemsOfThatTier.forEach((itemOfThatTier: ViewListResponseIndex) => {
            let newTierListRowItem: TierListItem = {
              index: ithItemFound,
              imageUrl: itemOfThatTier.imageUrl,
              name: itemOfThatTier.name,
            };
            row.items.push(newTierListRowItem);
            ++ithItemFound;
          });
        });

        setRowContainerItems(tierListRowTemplate.reverse());
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="w-full min-h-screen pt-20 browse-gradient font-urbanist">
      <div className="max-w-[2048px] w-3/4 pb-5 mx-auto mt-8 mb-6 ">
        <Link
          to="../browse/"
          className="px-12 pb-1 text-3xl text-center rounded-lg text-neutral-600"
        >
          Go Back
        </Link>
        <h1 className="text-5xl font-bold text-white">Tier List: yes</h1>
      </div>

      <div className="mx-auto font-semibold ">
        <div className="flex justify-e mx-auto mt-8 mb-6 font-semibold">
          <Link
            to="../vote-list/1"
            className="w-3/4 px-12 py-3 pb-5 text-3xl text-center transition-all duration-500 rounded-lg text-zt-light bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-800 hover:to-fuchsia-900"
          >
            Make your own entry here
          </Link>
        </div>

        <div className="w-3/4 pb-5 mx-auto">
          <TierListStatic rowContainerItems={rowContainerItems} />
        </div>
      </div>
    </div>
  );
};

export default ViewList;
