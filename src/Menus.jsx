import React from "react";
import Coocking from "./coocking";

const Menus = () => {
  return (
    <div className="flex gap-4">
      <Menu></Menu>
      <Menu></Menu>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://raw.githubusercontent.com/MillatSakib/img-src/main/hero.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl">Spaghetti Bolognese</h2>
          <p className="text-left opacity-80 font-medium">
            Classic Italian pasta dish with sabory meat sauce
          </p>

          <h3 className="text-xl text-left font-bold">Ingredients: 6</h3>
          <ul className="text-left list-disc my-2 opacity-80 font-medium">
            <li>500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
          </ul>
          <hr />
          <div className="my-4 flex gap-4 opacity-90 font-medium">
            <span className="flex items-center gap-2">
              <span class="material-symbols-outlined">schedule</span>30 minutes
            </span>
            <span className="flex items-center gap-2">
              <span class="material-symbols-outlined">
                local_fire_department
              </span>
              600 calories
            </span>
          </div>
          <div className="card-actions justify-start text-left">
            <button className="btn btn-success rounded-full px-5 font-bold">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
