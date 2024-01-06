import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)
  const liClass =  inCart ?  "in-cart" : ""
  function handleCart() {
    setCart((inCart => !inCart))
  }
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart}>{inCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
