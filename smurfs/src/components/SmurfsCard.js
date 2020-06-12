import React from "react";

const SmurfsCard = ({ smurfs }) => {
  return (
    <div className="card">
      <h2>{smurfs.name}</h2>
      <p>Age: {smurfs.age}</p>
      <p>Height: {smurfs.height}cm</p>
    </div>
  );
};

export default SmurfsCard;
