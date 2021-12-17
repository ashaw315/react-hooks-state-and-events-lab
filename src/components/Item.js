import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);

  function handleAddClick() {
    setIsAdded(!isAdded);
  }

  const inCart = isAdded ? "in-cart" : ""


  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddClick}>{isAdded ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
