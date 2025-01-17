import React, { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

// Create the ShopContext
export const ShopContext = createContext();

// Define the ShopContextProvider
const ShopContextProvider = (props) => {
  const currency = "$"; // Define currency symbol
  const delivery_free = 10; // Define delivery fee
  const value = { products, currency, delivery_free }; // Context value to share

  // Pass the value to ShopContext.Provider
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
