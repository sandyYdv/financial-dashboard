import React from "react";
import { useAppContext } from "../context/AppContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const ExpenseChart = () => {
  const { expenses } = useAppContext();
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: expenses.map((e) => e.category),
    datasets: [
      {
        data: expenses.map((e) => e.amount),
        backgroundColor: ["#FC7900", "#343C6A", "#232323"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        // Add datalabels plugin
        formatter: (value, ctx) => {
          if (expenses && expenses.length > 0) {
            const sum = expenses.reduce(
              (acc, expense) => acc + expense.amount,
              0
            );
            const percentage = (value / sum) * 100;
            return `${percentage.toFixed(0)}%`;
          }
          return "";
        },
        color: "#fff", // White text color for labels
        font: {
          weight: "bold",
        },
      },
    },

    cutout: "60%", // Adjust the cutout for a doughnut chart
  };

  const calculatePercentage = (amount) => {
    const sum = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return Math.round((amount / sum) * 100);
  };

  return (
    <div className="bg-white rounded-lg p-6 w-80">
      <h2 className="text-xl font-semibold mb-4">Expense Statistics</h2>
      <div className="relative h-64">
        <Pie
          key={JSON.stringify(data)}
          data={data}
          options={options}
          type="doughnut"
        />
        {expenses && expenses.length > 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1/4 left-1/4 text-center">
              <div className="text-sm font-semibold text-gray-600">
                {calculatePercentage(expenses[0].amount)}%
              </div>
              <div className="text-xs text-gray-500">
                {expenses[0].category}
              </div>
            </div>
            <div className="absolute top-1/4 right-1/4 text-center">
              <div className="text-sm font-semibold text-gray-600">
                {calculatePercentage(expenses[1].amount)}%
              </div>
              <div className="text-xs text-gray-500">
                {expenses[1].category}
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/4 text-center">
              <div className="text-sm font-semibold text-gray-600">
                {calculatePercentage(expenses[2].amount)}%
              </div>
              <div className="text-xs text-gray-500">
                {expenses[2].category}
              </div>
            </div>
            {/* <div className="absolute bottom-1/4 right-1/4 text-center">
              <div className="text-sm font-semibold text-gray-600">
                {calculatePercentage(expenses[3].amount)}%
              </div>
              <div className="text-xs text-gray-500">
                {expenses[3].category}
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseChart;
