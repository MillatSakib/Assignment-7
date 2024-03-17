import React from "react";
import { useState } from "react";
const Coocking = ({ items }) => {
  const [stateVariable, setStateFunction] = useState([]);
  const DataSet = (abc) => {
    console.log(abc);
    setStateFunction([...stateVariable, abc]);
  };
  return (
    <div className="border-2 rounded-xl py-6">
      <h2 className="text-xl md:text-2xl font-bold my-4">
        Want to cook: {items?.length}
      </h2>
      <hr className="mx-[10%]" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="opacity-80 font-medium">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items.map((fData, index) => (
              <tr key={fData.recipeId}>
                <th className="opacity-80 font-medium">{index + 1}</th>
                <td className="opacity-80 font-medium">{fData.recipeName}</td>
                <td className="opacity-80 font-medium">
                  {fData.preparingTime}
                </td>
                <td className="opacity-80 font-medium">{fData.calories}</td>
                <td>
                  <button
                    className="btn btn-success rounded-full font-bold"
                    onClick={() => DataSet(fData)}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl md:text-2xl font-bold my-4">
        Currently coocking : 02
      </h3>
      <hr className="mx-[10%]" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="opacity-80 font-medium">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {stateVariable.map((fData, index) => (
              <tr key={fData.recipeId}>
                <th className="opacity-80 font-medium">{index + 1}</th>
                <td className="opacity-80 font-medium">{fData.recipeName}</td>
                <td className="opacity-80 font-medium">
                  {fData.preparingTime}
                </td>
                <td className="opacity-80 font-medium">{fData.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coocking;
