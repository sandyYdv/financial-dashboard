import React from "react";
import CardList from "../components/CardList";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {
  return (
    // <div className="p-6 bg-gray-100 min-h-screen">

    <div className="grid grid-cols-12 grid-rows-5 gap-0">
      <div className="col-span-2 row-span-5 bg-gray-200"> </div>
      <div className="col-span-10 row-span-5 bg-gray-300">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Overview</h1>
          <input
            type="text"
            placeholder="Search for something"
            className="px-4 py-2 border rounded-lg"
          />
        </header>
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-8 space-y-6">
            <CardList />
            {/* <DailyActivity /> */}
          </div>

          {/* Right Column */}
          <div className="col-span-4 space-y-6">
            <TransactionList />
            <ExpenseChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
