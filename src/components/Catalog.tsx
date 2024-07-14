import { useState } from "react";
import { Product } from "./Product";
import { ADD_TO_CART_TOPIC } from "../topics";

export const Catalog = () => {
  const [productsInCartCount, setProductsInCartCount] = useState(0);

  const addToCart = () => {
    setProductsInCartCount(productsInCartCount + 1);
    const addToCartEvent = new CustomEvent(ADD_TO_CART_TOPIC, {
      detail: { count: productsInCartCount + 1 },
    });
    window.dispatchEvent(addToCartEvent);
  };

  return <Product onAddToCart={addToCart} />;
};
