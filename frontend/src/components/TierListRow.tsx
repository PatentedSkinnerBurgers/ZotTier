import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { TierListItem } from "../types/tierlist";
import ListItem from "./ListItem";

type Props = {
  label: string;
  items: TierListItem[];
  isDraggable: boolean;
};

const TierListRow = ({ label, items, isDraggable }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-${label}`,
    data: {
      accepts: "list-item",
      dropId: label,
    },
  });
  const style = {
    backgroundColor: isOver ? "rgba(136, 108, 219, 0.3)" : undefined,
    borderRadius: isOver ? "6px" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-wrap items-center w-full h-full transition-colors duration-200"
    >
      {items.map(({ name, imageUrl, index }) => (
        <React.Fragment key={index}>
          <ListItem
            name={name}
            imageUrl={imageUrl}
            index={index}
            isDraggable={isDraggable}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TierListRow;
