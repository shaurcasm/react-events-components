import { useEffect, useState } from "react";
import { ADD_TO_CART_TOPIC } from "../topics";
import { NumberOfProductsAdded } from "./NumberOfProductsAdded";

interface ProductAddEvent extends Partial<Event> {
  detail?: {
    count: number;
  };
}
export const Cart = () => {
  const [productsInCartCount, setProductsInCartCount] = useState(0);

  useEffect(() => {
    const listener: EventListener = (event: ProductAddEvent) => {
      setProductsInCartCount(event.detail?.count as number);
    };

    window.addEventListener(ADD_TO_CART_TOPIC, listener);

    // To Avoid memory leak - Continuously adding event listener would stack it
    return () => {
      window.removeEventListener(ADD_TO_CART_TOPIC, listener);
    };
  }, []);

  return <NumberOfProductsAdded count={productsInCartCount} />;
};
