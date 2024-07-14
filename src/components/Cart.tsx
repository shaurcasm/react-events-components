import { useEffect, useState } from "react";
import { ADD_TO_CART_TOPIC } from "../topics";
import { NumberOfProductsAdded } from "./NumberOfProductsAdded";

interface ProductAddEvent extends Event {
  detail: {
    count: number;
  };
}
interface ProductAddEventListener extends EventListener<ProductAddEvent> {
  (event: ProductAddEvent): void;
}
export const Cart = () => {
  const [productsInCartCount, setProductsInCartCount] = useState(0);

  useEffect(() => {
    const listener: ProductAddEventListener = (event: ProductAddEvent) => {
      setProductsInCartCount(event.detail.count);
    };

    window.addEventListener(ADD_TO_CART_TOPIC, listener);

    // To Avoid memory leak - Continuously adding event listener would stack it
    return () => {
      window.removeEventListener(ADD_TO_CART_TOPIC, listener);
    };
  }, []);

  return <NumberOfProductsAdded count={productsInCartCount} />;
};
