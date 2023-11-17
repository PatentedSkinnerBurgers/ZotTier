import "../assets/css/pages.css";
import React, { useEffect, useState } from "react";
import TierListDroppable from "../components/TierListDroppable";
import {
  DndContext,
  DragEndEvent,
  rectIntersection,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import ListItem from "../components/ListItem";
import { useParams } from "react-router-dom";
import { TierListItem } from "../types/tierlist";
import { ViewListResponseIndex } from "./ViewList";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

type Props = {};

type SubmitVotePayloadItem = {
  rank: number;
  tierListId: number;
  itemName: string;
};

export type TierListRowType = {
  label: string;
  color: string;
  items: TierListItem[];
};

const VoteList = (props: Props) => {
  const { id } = useParams();
  const [rowContainerItems, setRowContainerItems] = useState<TierListRowType[]>(
    [],
  );
  const [unusedItems, setUnusedItems] = useState<TierListItem[]>([]);
  const [tierListName, setTierListName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setRowContainerItems([
      { label: "S", color: "#7A00C5", items: [] },
      { label: "A", color: "#2977AF", items: [] },
      { label: "B", color: "#127652", items: [] },
      { label: "C", color: "#7F543B", items: [] },
      { label: "D", color: "#682D3C", items: [] },
      { label: "F", color: "#1C1C1C", items: [] },
    ]);
  }, []);

  const submitVote = () => {
    console.log(rowContainerItems);
    const payload: SubmitVotePayloadItem[] = [];

    if (id) {
      rowContainerItems
        .slice()
        .reverse()
        .forEach((row: TierListRowType, index: number) => {
          row.items.forEach((item: TierListItem) => {
            payload.push({
              rank: index,
              tierListId: Number(id),
              itemName: item.name,
            });
          });
        });

      console.log(payload);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
      fetch(
        `${process.env.REACT_APP_API_ENDPOINT_URL}/submit-vote`,
        requestOptions,
      )
        .then((response) => {
          console.log(response);
        })
        .then(() => navigate(-1));
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT_URL}/tierlist?id=${id}`)
      .then((response) => response.json())
      .then((data: ViewListResponseIndex[][]) => {
        console.log(data);
        let newUnusedItems: TierListItem[] = [];

        let ithItemFound = 0;
        let tierListNameFound: string | null = null;

        data.forEach((items: ViewListResponseIndex[], i: number) => {
          items.forEach((item: ViewListResponseIndex) => {
            if (!tierListNameFound && item.tierListName) {
              tierListNameFound = item.tierListName;
            }

            let newTierListItem: TierListItem = {
              index: ithItemFound,
              name: item.itemName,
              imageUrl: item.imageUrl,
            };
            newUnusedItems.push(newTierListItem);
            ++ithItemFound;
          });
        });

        setTierListName(tierListNameFound);
        setUnusedItems(newUnusedItems);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const draggedItem = active.data.current?.item;
    const draggedIndex = draggedItem.index;

    const droppedLabel = over?.data.current?.dropId;

    console.log(`${draggedIndex} dropped into ${droppedLabel}`);

    // clear out every instance before modifying
    const newUnusedItems: TierListItem[] = unusedItems.filter(({ index }) => {
      return draggedIndex !== index;
    });

    const filteredRowContainerItems: TierListRowType[] = rowContainerItems.map(
      (rowContainerItem: TierListRowType) => {
        rowContainerItem.items = rowContainerItem.items.filter(
          (item: TierListItem) => {
            return item.index !== draggedIndex;
          },
        );

        return rowContainerItem;
      },
    );

    if (droppedLabel) {
      // add to corresponding row
      let newRowContainerItems: TierListRowType[] =
        filteredRowContainerItems.map((rowContainerItem: TierListRowType) => {
          if (rowContainerItem.label !== droppedLabel) return rowContainerItem;

          let newTierListItem: TierListItem = {
            name: draggedItem.name,
            imageUrl: draggedItem.imageUrl,
            index: draggedIndex,
          };
          let newRowItems = [...rowContainerItem.items, newTierListItem];

          rowContainerItem.items = newRowItems;
          return rowContainerItem;
        });

      setRowContainerItems(newRowContainerItems);
      setUnusedItems(newUnusedItems);
    } else {
      // add back to unused
      let newTierListItem: TierListItem = {
        name: draggedItem.name,
        imageUrl: draggedItem.imageUrl,
        index: draggedIndex,
      };
      newUnusedItems.push(newTierListItem);

      setUnusedItems(newUnusedItems);
      setRowContainerItems(filteredRowContainerItems);
    }
  };

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return (
    <div className="w-full h-full min-h-screen pt-20 browse-gradient font-urbanist">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none svg-pattern" />
      <div className="px-5 md:px-10 mx-auto max-w-[1600px]">
        <div className="mx-auto mt-8 mb-2">
          <button
            className="px-0 text-center rounded-lg text-3x1 text-violet-400"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className="inline-block pb-1" />
            Go Back
          </button>
        </div>
        <h1 className="mx-auto mt-1 text-5xl font-bold text-zt-light">
          {tierListName}
        </h1>
        <p className="pb-5 mt-2 mb-1 tracking-wide text-zt-light font-urbanist ">
          Contribute your votes to this tier list
        </p>
        <DndContext
          collisionDetection={rectIntersection}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <div className="flex flex-col gap-5 pb-5 mx-auto md:flex-row">
            <div className="md:w-3/5 xl:w-3/4">
              <TierListDroppable rowContainerItems={rowContainerItems} />
            </div>
            <div className="md:w-2/5 xl:w-1/4">
              <div className="h-fit border-2 rounded-lg border-[rgba(238,238,238,0.1)] flex flex-wrap justify-center items-start content-start">
                {unusedItems.map(({ name, imageUrl, index }: TierListItem) => (
                  <React.Fragment key={index}>
                    <ListItem
                      name={name}
                      imageUrl={imageUrl}
                      index={index}
                      isDraggable={true}
                    />
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-center mx-auto mt-3 font-semibold">
                <button
                  className="w-full px-6 py-3 text-lg text-center transition-all duration-200 rounded-lg text-1xl w-1/8 text-zt-light bg-gradient-to-r from-violet-700 to-fuchsia-800 hover:bg-gradient-to-r hover:opacity-80 align-center h-fit"
                  onClick={submitVote}
                >
                  ZOT your vote!
                </button>
              </div>
            </div>
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default VoteList;
