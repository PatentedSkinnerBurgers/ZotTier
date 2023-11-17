import "../assets/css/pages.css";
import React, { useState } from "react";
import TierListDroppable from "../components/TierListDroppable";
import { DndContext, DragEndEvent, rectIntersection } from "@dnd-kit/core";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
import { TierListItem } from "../types/tierlist";

type Props = {};

export type TierListRowType = {
  label: string;
  color: string;
  items: TierListItem[];
};

const rowsArray: TierListRowType[] = [
  { label: "S", color: "#7A00C5", items: [] },
  { label: "A", color: "#2977AF", items: [] },
  { label: "B", color: "#127652", items: [] },
  { label: "C", color: "#7F543B", items: [] },
  { label: "D", color: "#682D3C", items: [] },
  { label: "F", color: "#1C1C1C", items: [] },
];

const tempItems: TierListItem[] = [
  { name: "one", imageUrl: "", index: 0 },
  { name: "two", imageUrl: "", index: 1 },
  { name: "three", imageUrl: "", index: 2 },
];

const title = "";

const VoteList = (props: Props) => {
  const [rowContainerItems, setRowContainerItems] =
    useState<TierListRowType[]>(rowsArray);
  const [unusedItems, setUnusedItems] = useState<TierListItem[]>(tempItems);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    console.log(`${active.id} dropped into ${over?.id}`);
  };

  return (
    <div className="w-full min-h-screen pt-20 browse-gradient font-urbanist">
      <h1 className="max-w-[2048px] w-3/4 pb-5 mx-auto mt-8 mb-6 text-5xl text-white">
        Tier List: {title} awesome placeholder
      </h1>
      <div className="flex justify-end gap-5 pb-5 pr-5 mx-auto font-semibold pl-9">
        <Link
          to="" //NEED TO ADD LOCATON ON CLICK
          className="w-2/5 px-12 py-3 pb-5 text-3xl text-center transition-all duration-500 rounded-lg text-zt-light bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:from-violet-800 hover:to-fuchsia-900"
        >
          Zot your vote!
        </Link>
      </div>
      <DndContext
        collisionDetection={rectIntersection}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-5 px-5 pb-5 mx-auto">
          <div className="w-3/5">
            <TierListDroppable rowContainerItems={rowContainerItems} />
          </div>
          <div className="w-2/5">
            <div className="h-full border-2 rounded-lg border-[rgba(238,238,238,0.25)]">
              {unusedItems.map(({ name, imageUrl, index }: any) => (
                <ListItem name={name} imageUrl={imageUrl} index={index} />
              ))}
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default VoteList;
