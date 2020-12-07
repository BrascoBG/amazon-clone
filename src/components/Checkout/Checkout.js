import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <h2>Your Shopping Basket is Empty</h2>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((product) => (
              <CheckoutProduct
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && <Subtotal />}
    </div>
  );
}

export default Checkout;
