import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBook } from "../action";

const Homepage = () => {
  const books = useSelector((state) => state.books);
  const disPatch = useDispatch();
  console.log(books);
  useEffect(() => {
    disPatch(fetchAllBook());
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      {books.map((el) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
