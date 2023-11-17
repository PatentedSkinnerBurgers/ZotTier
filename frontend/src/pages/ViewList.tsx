import "../assets/css/pages.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TierListStatic from "../components/TierListStatic";
import { TierListRowType } from "./VoteList";
import { TierListItem } from "../types/tierlist";

export type ViewListResponseIndex = {
  tierListId: number;
  name: string;
  numVotes: number;
  voteSum: number;
  imageUrl: string;
};

type Props = {};

const title = "";

const ViewList = (props: Props) => {
  const { id } = useParams();
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
      <div className="max-w-[2048px] w-3/4 mx-auto mt-8 mb-2 ">
        <Link
          to="../browse/"
          className="px-0 text-center rounded-lg text-3x1 text-violet-400"
        >
          Go Back
        </Link>
      </div>
      <div className="max-w-[2048px] w-3/4 pb-5 mx-auto mt-1 mb-6 flex justify-between">
        <h1 className="inline-block text-5xl font-bold text-white">
          placeholder
        </h1>
        <Link
          to={`../vote-list/${id}`}
          className="px-6 py-3 text-center transition-all duration-500 rounded-lg text-1xl w-1/8 text-zt-light bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-800 hover:to-fuchsia-900 align-center"
        >
          Make your own entry here
        </Link>
      </div>

      <div className="mx-auto font-semibold ">
        <div className="w-3/4 pb-5 mx-auto">
          <TierListStatic rowContainerItems={rowContainerItems} />
        </div>
      </div>
    </div>
  );
};

export default ViewList;
