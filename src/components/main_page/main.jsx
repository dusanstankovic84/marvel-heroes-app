import React, { useState, useEffect, Fragment } from "react";
import Cards from "./card";
import { heroCharacters, searchCharacter } from "../../services/services";
import MyTeam from "./myTeam";
import SearchBar from "./searchBar";

const MainPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [query, setQuery] = useState("");

  const addSelectedHero = (name, img, heroId) => {      
    const newSelectedHero = { name, img, heroId };
    
    let exist = selectedHeroes.filter(e=>e.heroId === heroId)
    if(exist && exist.length>0){
      alert('You have already added a selected hero')
    }else{
      setSelectedHeroes([...selectedHeroes, newSelectedHero])
    }
  };

  const deleteSelectedHero = (img) => {
    let arr = selectedHeroes.filter(e => e.img !== img)
    setSelectedHeroes(arr)
  }

  useEffect(() => {
    if (query === "") {
      heroCharacters().then((res) => {
        setHeroes(res.data.results);
        setLoading(false);
      });
    } else {
      searchCharacter(query).then((result) => {
        setHeroes(result.data.results);
        setLoading(false);
      });
    }
  }, [query]);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <SearchBar search={(q) => setQuery(q)} />
              </div>
            </div>
            <div className="row">
              <Cards items={heroes} onSelect={addSelectedHero} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-12">
                <h3>MY TEAM</h3>
              </div>
            </div>
            {selectedHeroes.map((hero) => {
              
              return <MyTeam img={hero.img} name={hero.name} deleted={deleteSelectedHero}/>;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MainPage;