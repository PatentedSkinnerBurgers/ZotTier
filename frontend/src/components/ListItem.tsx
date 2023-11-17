import "../assets/css/pages.css";
import React from "react";
import { useDraggable } from "@dnd-kit/core";

type Props = { name: string; imageUrl: string; index: number };

const ListItem = ({ name, imageUrl, index }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${index}`,
    data: {
      type: "list-item",
      item: { name, imageUrl, index },
    },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-4 mx-2 bg-pink-500 text-zt-light cursor-grab active:cursor-grabbing"
    >
      {name}
    </button>
  );
};

export default ListItem;
