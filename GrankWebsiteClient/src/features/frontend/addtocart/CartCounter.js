import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCard } from "../../../app/slices/shoppingSlice";
import { selectCardsecu } from "../../../app/slices/shoppingsecuSlice";

import { Link } from "react-router-dom";

const CardCounter = () => {
  const lengthse = useSelector(selectCard)?.products?.length;
  const lengthsecu = useSelector(selectCardsecu)?.productssecu?.length;
  var length = lengthse + lengthsecu;
  return (
    <>
      <Link to="/cart">
        {/* <span style={{ backgroundColor: "cyan", padding: 15, borderRadius: 5 }}> */}
        <span className="cart-count">{length}</span>
        {/* <span className="cart-count2">{lengthsecu}</span> */}
        {/* <span className="cart-count">{lengthsecu}</span> */}
      </Link>
    </>
  );
};

export default CardCounter;
