import React from "react";
import FoodData from "./Menus.jsx";
import Coocking from "./Coocking";

const Recipes = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl md:text-4xl font-bold">Our Recipes</h2>
      <p className="w-full md:w-[70%] mx-auto my-8">
        Explore a delectable array of dishes in Our Recipes. From appetizers to
        desserts and seasonal specialties, our collection offers diverse flavors
        and culinary inspirations to tantalize your taste buds.
      </p>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[65%] w-full">
          <FoodData></FoodData>
        </div>
        <div className="lg:w-[35%] w-full">
          <Coocking />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
