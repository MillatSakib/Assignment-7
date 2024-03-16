import React from "react";

const Recipes = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl md:text-4xl font-bold">Our Recipes</h2>
      <p className="w-full md:w-[70%] mx-auto my-8">
        Explore a delectable array of dishes in Our Recipes. From appetizers to
        desserts and seasonal specialties, our collection offers diverse flavors
        and culinary inspirations to tantalize your taste buds.
      </p>
      <div className="grid gap-4">
        <div className="col-start-1 col-end-8 h-4 bg-red-500"></div>
        <div className="col-start-8 col-end-13 h-4 bg-black"></div>
      </div>
    </div>
  );
};

export default Recipes;
