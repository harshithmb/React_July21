import React from "react";

const Card = ({ item, addProduct }) => {
  const { name, description, id, preview } = item;
  return (
    <div className="card col-3 m-4">
      <img src={preview} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
      <button className="btn btn-success" onClick={() => addProduct(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
