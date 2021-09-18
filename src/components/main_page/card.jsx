// SHOW ALL HEROES CARD

import React, { Fragment } from "react";
import SingleHeroCard from "./SingleHeroCard";

const Cards = ({ items, onSelect }) => {
  return (
    <Fragment>
      {items.map((hero, index) => {
        return <SingleHeroCard hero={hero} onSelect={onSelect} key={index} />;
      })}
    </Fragment>
  );
};
export default Cards;