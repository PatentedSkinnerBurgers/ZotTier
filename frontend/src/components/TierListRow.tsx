import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { TierListItem } from "../types/tierlist";
import ListItem from "./ListItem";

type Props = {
  label: string;
  items: TierListItem[];
};

const TierListRow = ({ label, items }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${label}`,
    data: {
      accepts: "list-item",
      dropId: label,
    },
  });
  const style = {
    backgroundColor: isOver ? "green" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-wrap items-center w-full h-full"
    >
      {items.map(({ name, imageUrl, index }) => (
        <React.Fragment key={index}>
          <ListItem name={name} imageUrl={imageUrl} index={index} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TierListRow;
