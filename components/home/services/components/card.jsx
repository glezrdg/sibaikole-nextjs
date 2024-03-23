import React from "react";

function Card({ url, title, description, lastSentence }) {
  return (
    <div
      key={item.url}
      className={`flex-shrink-0 flex-grow-0 flex ${
        direction ? "flex-row-reverse" : "flex-row"
      } items-center justify-center w-full h-full transition-duration`}
      style={{ transform: `translateX(${-100 * imageIndex}%)` }}
    >
      <img src={item.url} alt="" className="h-[35vh]  rounded-md" />
      <div className="w-1/2 pl-5">
        <h2 className="text-3xl font-semibold">{item.title}</h2>
        <p className="mt-5 text-lg text-balance w-[80%]">
          {item.description}
          <br />
          <br />
          <span className="font-semibold pt-5">{item.lastSentence}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
