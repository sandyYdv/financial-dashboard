import { createContext, useContext, useState } from "react";
import {
  cards,
  transactions,
  expenses,
  balanceHistory,
} from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{ cards, transactions, expenses, balanceHistory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
