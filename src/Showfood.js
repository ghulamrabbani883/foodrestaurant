import React from "react";

const Showfood = ({ food }) => {
  return (
    <>
        {food.map((curElem, id) => {
          return (
            <>
            <div className="col-md-4 gy-3" key={id}>
              <div class="card">
                
                <div class="card-body">
                  <h5 class="card-title">{curElem.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{curElem.catagory}</h6>
                  <p class="card-text">
                  {curElem.description}
                  </p>
                  <img class="card-img-top" src={curElem.image} alt="Card image cap" />
                  <h5 class="card-title price">${curElem.price}</h5>
                </div>
              </div>
              </div>
              
            </>
          );
        })}
    </>
  );
};

export default Showfood;
