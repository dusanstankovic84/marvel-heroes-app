import React from "react";

const SingleHeroCard = ({ hero, onSelect }) => {
  //console.log(hero);
  return (
    <div className="col-md-4">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
        </div>
        <img
          src={hero.thumbnail.path + "/portrait_xlarge.jpg"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <a href="#" className="card-link">
            Info
          </a>
          <a
            href="#"
            className="card-link"
            onClick={() => {
              onSelect(hero.name, hero.thumbnail.path + "/portrait_small.jpg", hero.id);
            }}
          >
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleHeroCard;
