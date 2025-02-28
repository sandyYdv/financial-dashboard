import React from "react";
import { useAppContext } from "../context/AppContext";
import Chip_Card from "../assets/Chip_Card.png";
import { Link } from "react-router-dom";

const CardList = () => {
  const { cards } = useAppContext();
  console.log("Cards", cards);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold">My Cards</h3>
        <Link to={"/cards"} className="text-black hover:text-gray-400">
          See All
        </Link>
      </div>
      <div className="flex">
        {cards?.map((card, i) => {
          return (
            <div
              key={i}
              className={`rounded-xl p-2 w-full mr-2  ${
                i % 2 === 0
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
                  : "bg-white shadow-md"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <label className="text-xs font-semibold uppercase text-gray-400">
                    Balance
                  </label>
                  <p className="text-2xl font-bold">{card?.balance}</p>
                </div>
                <img src={Chip_Card} alt="Chip Card" className="h-8" />
              </div>
              <div className="flex justify-between mr-22">
                <div>
                  <label className="text-xs font-semibold uppercase text-gray-400">
                    Card Holder
                  </label>
                  <p className="font-semibold">{card?.holder}</p>
                </div>
                <div className="">
                  <label className="text-xs font-semibold uppercase text-gray-400">
                    Valid Thru
                  </label>
                  <p className="font-semibold">{card?.valid}</p>
                </div>
              </div>
              <div
                className={`mt-4 flex justify-between items-center p-4 ${
                  i % 2 === 0 ? "bg-[#5B5A6F]" : ""
                }`}
              >
                <p className="font-mono">{card?.number}</p>
                <div
                  className={`w-8 h-5 rounded-full ${
                    i % 2 === 0 ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
