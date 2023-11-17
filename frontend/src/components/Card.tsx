import { Link } from "react-router-dom";
import { TierList } from "../types/tierlist";
import { FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

type CardProps = {
  cardList: TierList;
};

const Card = ({ cardList }: CardProps) => {
  const { id, imageUrl, name, itemCount, totalVotes } = cardList;

  return (
    <Link to={`/view-list/${id}`} className="w-full overflow-hidden rounded-lg">
      <div
        className="min-h-[400px] h-1/2 relative bg-cover bg-center flex flex-col justify-end py-7 px-10"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(10,0,5,0.7)]" />
        <div className="flex justify-between">
          <div>
            <p className="relative text-xl text-white">
              <span className="pr-2">{`${totalVotes} votes`}</span>{" "}
              <span>{`${itemCount} items`}</span>{" "}
            </p>
            <h2 className="relative text-6xl font-semibold text-white">
              {name}
            </h2>
          </div>
          <div className="relative flex items-end align-bottom">
            <FaArrowCircleRight className="text-5xl text-zt-light" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
