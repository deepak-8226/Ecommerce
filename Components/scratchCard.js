import ScratchCard from "react-scratchcard";
import { useState } from "react";
import { favicon } from "../public/favicon.ico";

const Scratchcard = () => {
  const [scratchtext, setScratchText] = useState("Congratulations! You won!");

  const handleSearchComplete = () => {
    console.log("The card is now clear");
    setScratchText("Congratulations! You Won!");
  };
  const geht = false;

  const settings = {
    width: 500,
    height: 500,
    image: favicon,
    finishPercent: 90,
    oncomplete: () => handleSearchComplete(),
  };

  return (
    <>
      <div className="">
        <ScratchCard {...settings}>
          {geht ? (
            <div>
              <p>Hello</p>
            </div>
          ) : (
            <div className="text">{scratchtext}</div>
          )}
        </ScratchCard>
      </div>
    </>
  );
};

export default Scratchcard;
