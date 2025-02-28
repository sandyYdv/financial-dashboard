import React from "react";
import { useAppContext } from "../context/AppContext";

const TransactionList = () => {
  const { transactions } = useAppContext();
  return (
    <div className="p-5 bg-gray-100 rounded-lg w-80">
      <h2 className="text-xl font-semibold mb-4">Recent Transaction</h2>
      <div className="bg-white rounded-lg p-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center mb-3">
            <div
              className={`bg-teal-100 rounded-full p-2 mr-4 w-10 h-10 flex items-center justify-center ${
                index === 2 ? "border-2 border-teal-500" : ""
              }`}>
              <span className="text-lg">{transaction.icon}</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{transaction.title}</p>
              <p className="text-xs text-gray-500">{transaction.date}</p>
            </div>
            <p
              className={`font-semibold ${
                transaction.isNegative ? "text-red-500" : "text-green-500"
              }`}>
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TransactionList;
