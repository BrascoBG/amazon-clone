import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <h2>Your Shopping Basket is Empty</h2>
      ) : (
        <div>
          <h2 className="checkout__title">You Shopping Basket</h2>
          {basket.map((product) => (
            <CheckoutProduct
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
