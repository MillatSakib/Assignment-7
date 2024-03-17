import { useEffect, useState } from "react";
const FoodData = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch("https://millatsakib.github.io/img-src/data.json")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 items-center justify-center gap-4">
      {foodData.map((fData) => (
        <FoodCard fData={fData} key={fData.id}></FoodCard>
      ))}
    </div>
  );
};

function FoodCard({ fData, handleAddToCooking }) {
  console.log(fData);

  return (
    <div className="mx-auto">
      <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={fData?.recipeImage}
            alt="foods Img"
            className="max-h-[185px] w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-xl">{fData?.recipeName}</h2>
          <p className="text-left opacity-80 font-medium">
            {fData.shortDescription}
          </p>

          <h3 className="text-xl text-left font-bold">
            Ingredients: {fData.ingredientsInArray.length}
          </h3>

          <ul className="text-left list-disc my-2 opacity-80 font-medium">
            {fData.ingredientsInArray.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr />
          <div className="my-4 flex gap-4 opacity-90 font-medium">
            <span className="flex items-center gap-2">
              <span class="material-symbols-outlined">schedule</span>
              {fData.preparingTime}
            </span>
            <span className="flex items-center gap-2">
              <span class="material-symbols-outlined">
                local_fire_department
              </span>
              {fData.calories}
            </span>
          </div>
          <div className="card-actions justify-start text-left">
            <button
              className="btn btn-success rounded-full px-5 font-bold"
              onClick={(e) => handleAddToCooking(fData)}
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodData;
