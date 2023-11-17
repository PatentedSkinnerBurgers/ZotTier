import { Link } from "react-router-dom";
import { TierList } from "../types/tierlist";
import { FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

type CardProps = {
  cardList: TierList;
};

const Card = ({ cardList }: CardProps) => {
  const { id, image, name, numItems, votes } = cardList;

  return (
    <Link
      to={`/view-list/${1}`}
      className="w-full overflow-hidden rounded-lg"
      key={id}
    >
      <div
        className="min-h-[400px] h-1/2 relative bg-cover bg-center flex flex-col justify-end py-7 px-10"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(10,0,5,0.7)]" />
        <div className="flex justify-between">
          <div>
            <p className="relative text-xl text-white">
              <span className="pr-2">{`${votes} votes`}</span>{" "}
              <span>{`${numItems} items`}</span>{" "}
            </p>
            <h2 className="relative text-6xl font-semibold text-white">
              {name}
            </h2>
          </div>
          <div className="relative">
            <IconContext.Provider value={{ color: "white", size: "3em" }}>
              <div>
                <FaArrowCircleRight />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
