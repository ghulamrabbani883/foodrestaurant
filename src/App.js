import React, { useState, useEffect } from "react";
import "./App.css";
import Showfood from "./Showfood";
import Food from "./Food";

const unique = [...new Set(Food.map((item) => item.catagory))];
function App() {
  const [food, setFood] = useState(Food);

  const showFood = (catag) => {
    const updatedFood = Food.filter((curElem) => {
      return curElem.catagory === catag;
    });
    setFood(updatedFood);
  };


  return (
    <>
    <div className="container-fluid my-5">
      <div className="container">
        <h1 className="text-center my-3 border-bottom border-2 border-warning">Our Restaurant Menu</h1>
      <div className="btn-group d-md-flex justify-content-md-center mx-5 " role="group" aria-label="Basic example" >
  

          {unique.map((curElem, id) => {
            return (
              <>
                <button type="button" className="btn btn-primary gy-5 border border-light" onClick={() => showFood(curElem)}>{curElem}</button>
                
              </>
            );
          })}
          <button type="button" className="btn btn-primary border border-light" onClick={() => setFood(Food)}>All</button>
          </div>
      <div className="row my-5">
      <Showfood food={food} />
      </div>
      
      </div>
      </div>
    </>
  );
}

export default App;
