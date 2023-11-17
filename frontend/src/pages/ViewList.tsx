import "../assets/css/pages.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TierListStatic from "../components/TierListStatic";
import { TierListRowType } from "./VoteList";
import { TierListItem } from "../types/tierlist";
import { IoIosArrowBack } from "react-icons/io";

export type ViewListResponseIndex = {
  tierListName: string;
  itemName: string;
  numVotes: number;
  voteSum: number;
  imageUrl: string;
};

type Props = {};

const ViewList = (props: Props) => {
  const { id } = useParams();
  const [rowContainerItems, setRowContainerItems] = useState<TierListRowType[]>(
    [],
  );
  const [tierListName, setTierListName] = useState<string | null>(null);

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
        let tierListNameFound: string | null = null;

        tierListRowTemplate.forEach((row: TierListRowType, i: number) => {
          const itemsOfThatTier = data[i];
          itemsOfThatTier.forEach((itemOfThatTier: ViewListResponseIndex) => {
            let newTierListRowItem: TierListItem = {
              index: ithItemFound,
              imageUrl: itemOfThatTier.imageUrl,
              name: itemOfThatTier.itemName,
            };

            if (!tierListNameFound && itemOfThatTier.tierListName) {
              tierListNameFound = itemOfThatTier.tierListName;
            }

            row.items.push(newTierListRowItem);
            ++ithItemFound;
          });
        });

        setTierListName(tierListNameFound);
        setRowContainerItems(tierListRowTemplate.reverse());
      })
      .catch((error) => console.log(error));
  }, [id, tierListName]);

  return (
    <div className="w-full min-h-screen pt-20 browse-gradient font-urbanist">
      <div className="px-5 md:px-10 mx-auto max-w-[1600px]">
        <div className="mx-auto mt-8 mb-2 ">
          <Link
            to="../browse/"
            className="px-0 text-center rounded-lg text-3x1 text-violet-400"
          >
            <IoIosArrowBack className="inline-block pb-1" />
            Go Back
          </Link>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 pb-5 mx-auto md:items-end md:flex-row">
          <div>
            <p className="mt-2 mb-1 tracking-wide text-zt-light font-urbanist">
              Viewing the average votes for:
            </p>
            <h1 className="inline-block text-5xl font-bold text-zt-light">
              {tierListName}
            </h1>
          </div>
          <Link
            to={`../vote-list/${id}`}
            className="px-6 py-3 text-center transition-all duration-200 rounded-lg text-1xl w-1/8 text-zt-light bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:opacity-80 align-center h-fit w-fit"
          >
            Make your own entry
          </Link>
        </div>

        <div className="pb-5">
          <TierListStatic rowContainerItems={rowContainerItems} />
        </div>
      </div>
    </div>
  );
};

export default ViewList;
