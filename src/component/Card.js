import React from "react";
import { Link } from "react-router-dom";

const Card = ({data}) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={data.thumbnailUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.isbn}</p>
        <div className="card-actions justify-end">
          <Link to={"/description"} className="btn btn-primary">
            Description
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
