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
    },
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div ref={setNodeRef} style={style} className="w-full h-full">
      {items.map(({ name, imageUrl, index }) => (
        <ListItem name={name} imageUrl={imageUrl} index={index} />
      ))}
    </div>
  );
};

export default TierListRow;
