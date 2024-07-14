import { FC } from "react";

interface NumberOfProductsAddedProps {
  count: number;
}
export const NumberOfProductsAdded: FC<NumberOfProductsAddedProps> = ({
  count,
}) => {
  return <>{count}</>;
};
