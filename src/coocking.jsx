import React from "react";

const Coocking = ({ items }) => {
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
              <tr>
                <th className="opacity-80 font-medium">{index + 1}</th>
                <td className="opacity-80 font-medium">{fData.recipeName}</td>
                <td className="opacity-80 font-medium">
                  {fData.preparingTime}
                </td>
                <td className="opacity-80 font-medium">{fData.calories}</td>
                <td>
                  <button className="btn btn-success rounded-full font-bold">
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
            <tr className="opacity-80 font-medium">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coocking;
