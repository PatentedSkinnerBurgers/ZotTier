import "../assets/css/pages.css";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import cn from "classnames";

type Props = {
  name: string;
  imageUrl: string;
  index: number;
  isDraggable: boolean;
};

const ListItem = ({ name, imageUrl, index, isDraggable }: Props) => {
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

  if (imageUrl == null || imageUrl == "") {
    return (
      <button
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={cn(
          "relative rounded-md overflow-hidden m-1 mx-2 text-zt-light h-fit",
          isDraggable ? "cursor-grab active:cursor-grabbing" : "",
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900" />
        <div className="relative z-10 object-cover w-20 h-20 flex flex-col justify-center">
          <p>{name}</p>
        </div>
      </button>
    );
  } else {
    return (
      <button
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={cn(
          "relative rounded-md overflow-hidden m-1 mx-2 text-zt-light h-fit",
          isDraggable ? "cursor-grab active:cursor-grabbing" : "",
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900" />
        <img
          src={imageUrl}
          alt={name}
          className="relative z-10 object-cover w-20 h-20"
        />
      </button>
    );
  }
};

export default ListItem;
