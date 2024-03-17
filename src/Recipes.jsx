import React from "react";
import toast, { Toaster } from "react-hot-toast";
import FoodData from "./Menus.jsx";
import { useState } from "react";
import Coocking from "./Coocking.jsx";

const Recipes = () => {
  const [items, setItems] = useState([]);
  function handleAddToCooking(item) {
    // console.log(item.recipeId);
    const newItem = item;
    const existingItemIndex = items.findIndex(
      (existingItem) => existingItem.recipeId === item.recipeId
    );
    if (existingItemIndex !== -1) {
      toast.error("Already Exist!", {
        position: "top-right",
      });
    } else {
      const updatedItems = [...items, newItem];

      setItems(updatedItems);
      console.log(items);
    }
    // console.log(items.find((ite) => ite.recipeId === item.recipeId));
  }
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
          <FoodData handleAddToCooking={handleAddToCooking}></FoodData>
        </div>
        <div className="lg:w-[35%] w-full">
          <Coocking items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
