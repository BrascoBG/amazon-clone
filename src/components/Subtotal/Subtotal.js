import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getSubtotal = (value) => {
    return value?.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal: ({basket.length} items):{" "}
        <strong>€{getSubtotal(basket).toFixed(2)}</strong>
      </p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
