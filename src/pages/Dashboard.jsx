import React from "react";
import CardList from "../components/CardList";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";
import WeeklyActivityChart from "../components/WeeklyActivityChart";
import BalanceHistoryChart from "../components/BalanceHistoryChart";
import QuickTransfer from "../components/QuickTransfer";

const Dashboard = () => {
  return (
    <div className="flex-1 flex-col">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-6">
        <div className="col-span-1 md:col-span-3 md:row-span-3">
          <CardList />
        </div>
        <div className="col-span-1 md:col-span-2 md:row-span-3">
          <TransactionList />
        </div>
        <div className="col-span-1 md:col-span-3 md:row-span-3">
          <WeeklyActivityChart />
        </div>
        <div className="col-span-1 md:col-span-2 md:row-span-3">
          <ExpenseChart />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3 md:grid-rows-1">
        <div className="col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Quick Transfer</h2>
          </div>
          <QuickTransfer />
        </div>
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Balance History</h2>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
