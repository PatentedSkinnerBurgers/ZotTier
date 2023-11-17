import { Link } from "react-router-dom";
import { TierList } from "../types/tierlist";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
import cn from "classnames";

type CardProps = {
  cardList: TierList;
};

const Card = ({ cardList }: CardProps) => {
  const { id, imageUrl, name, itemCount, totalVotes } = cardList;
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  return (
    <Link
      to={`/view-list/${id}`}
      className="w-full overflow-hidden rounded-lg"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
    >
      <div className="min-h-[300px] relative bg-cover bg-center flex flex-col justify-end p-5 md:py-7 md:px-10 font-urbanist">
        <img
          src={imageUrl}
          alt=""
          className="absolute top-0 left-0 object-cover w-full h-full transition-all duration-1000 "
          style={{
            scale: cn(mouseEnter ? "100%" : "108%"),
          }}
        />
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(10,0,5,0.8)] transition-opacity duration-500",
            mouseEnter ? "opacity-100" : "opacity-80",
          )}
        />
        <div className="flex justify-between">
          <div>
            <p
              className={cn(
                "relative text-xl text-white transition-transform duration-500",
                mouseEnter ? "-translate-y-4" : "translate-y-0",
              )}
            >
              <span className="pr-2">{`${totalVotes} votes`}</span>{" "}
              <span>{`${itemCount} items`}</span>{" "}
            </p>
            <h2
              className={cn(
                "relative text-5xl md:text-6xl font-semibold text-white transition-transform duration-500 pr-3",
                mouseEnter
                  ? "-translate-y-2 translate-x-2 scale-105"
                  : "translate-y-0 translate-x-0 scale-100",
              )}
            >
              {name}
            </h2>
          </div>
          <div
            className={cn(
              "relative flex items-end align-bottom transition-transform duration-500",
              mouseEnter
                ? "-translate-y-4 scale-110"
                : "translate-y-0 scale-100",
            )}
          >
            <FaArrowCircleRight className="text-4xl md:text-5xl text-zt-light" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
