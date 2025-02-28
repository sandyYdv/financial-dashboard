import React from "react";
import CardList from "../components/CardList";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";
import WeeklyActivityChart from "../components/WeeklyActivityChart";
import BalanceHistoryChart from "../components/BalanceHistoryChart";
import QuickTransfer from "../components/QuickTransfer";

const Dashboard = () => {
  return (
    <div className="flex-1 flex-col  ">
      <div className="grid grid-cols-1  md:grid-cols-2  gap-4 md:gap-6">
        <div className="w-full">
          <CardList />
        </div>
        <div className="w-full">
          <TransactionList />
        </div>
        <div className="w-full">
          <WeeklyActivityChart />
        </div>
        <div className="w-full">
          <ExpenseChart />
        </div>
      </div>
      <div className="flex mt-3 lg:flex-row">
        <QuickTransfer />
        <div className="ml-4">
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
