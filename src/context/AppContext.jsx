import { createContext, useContext, useState } from "react";
import {
  cards,
  transactions,
  expenses,
  balanceHistory,
  weeklyActivity,
  quickTransfer,
  user,
} from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        cards,
        transactions,
        expenses,
        balanceHistory,
        weeklyActivity,
        quickTransfer,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
