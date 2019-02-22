import React from "react";

const Cards = props => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
      <img alt="Robots" src={`https://robohash.org/${props.id}?200*200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Cards;