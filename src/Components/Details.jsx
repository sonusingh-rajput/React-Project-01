import React from "react";
import { FaStar } from "react-icons/fa";

const Details = () => {
  return (
    <div className="flex gap-10 justify-center items-center h-full w-full">
      <img
        className="w-[20%] h-[50%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      />
      <div className="w-[30%]">
        <h1 className="text-2xl font-semibold mb-3 text-zinc-800">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <div className="flex items-center gap-3 mb-3">
          <div className="inline-block">
            <p className=" flex items-center gap-2 px-3 py-1 bg-gray-800 text-white rounded font-bold">
              3.9{" "}
              <span className="text-sm">
                <FaStar />
              </span>{" "}
            </p>
          </div>
          <div className="flex gap-1 items-center text-zinc-500">
            <p className="font-semibold">610</p>
            <p className="tracking-wide">Ratings</p>
          </div>
        </div>
        <p className="mb-3 text-zinc-400 text-sm">Man's Clothing</p>
        <p className="text-2xl font-semibold mb-3">$150.00</p>
        <p className="text-sm text-zinc-700 mb-6 ">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="flex gap-5">
          <button className="px-8 py-1 text-green-800 hover:text-green-500 rounded  border border-green-800">
            Edit
          </button>
          <button className="px-6 py-1 text-green-800 hover:text-red-400 rounded border border-green-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
