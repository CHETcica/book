import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBook } from "../action";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="container mx-auto">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=20&h=20"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
