import React, { useEffect, useState } from "react";
import axios from "axios";
import { Beers } from "../../types/beer";

const Beer = () => {
  const [beer, setBeer] = useState<Beers[]>();
  const [show, setShow] = useState<Boolean>(false);

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/?per_page=8`)
      .then((response) => setBeer(response.data));
  }, []);

  return (
    <div className="food-beer-list food-shop">
      <h1>Types of beer</h1>
      <button onClick={() => setShow(!show)}>Show beers</button>

      <div className="beers-list">
        {show &&
          beer?.map((item: Beers) => (
            <div key={item.id} className="beer">
              <img src={item.image_url} alt="Buzz" />
              <h3> {item.name}</h3>
              <span>{item.tagline}</span>
              <small> {item.description}</small>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Beer;
