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
      <div
        className="min-h-[400px] h-1/2 relative bg-cover bg-center flex flex-col justify-end py-7 px-10 transition-all duration-1000"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: cn(mouseEnter ? "100%" : "108%"),
        }}
      >
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(10,0,5,0.7)] transition-opacity duration-500",
            mouseEnter ? "opacity-100" : "opacity-80",
          )}
        />
        <div className="flex justify-between">
          <div>
            <p
              className={cn(
                "relative text-xl text-white transition-transform duration-500",
                mouseEnter ? "-translate-y-2" : "translate-y-0",
              )}
            >
              <span className="pr-2">{`${totalVotes} votes`}</span>{" "}
              <span>{`${itemCount} items`}</span>{" "}
            </p>
            <h2
              className={cn(
                "relative text-6xl font-semibold text-white transition-transform duration-500",
                mouseEnter ? "-translate-y-2" : "translate-y-0",
              )}
            >
              {name}
            </h2>
          </div>
          <div
            className={cn(
              "relative flex items-end align-bottom transition-transform duration-500",
              mouseEnter ? "-translate-y-2" : "translate-y-0",
            )}
          >
            <FaArrowCircleRight className="text-5xl text-zt-light" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
