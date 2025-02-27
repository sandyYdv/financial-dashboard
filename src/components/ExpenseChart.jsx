import React from "react";
import { useAppContext } from "../context/AppContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const ExpenseChart = () => {
  const { expenses } = useAppContext();
  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
  const data = {
    labels: expenses.map((e) => e.category),
    datasets: [
      {
        data: expenses.map((e) => e.amount),
        backgroundColor: ["#FC7900", "#343C6A", "#232323", "#0000FF"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the default legend
        position: "right",
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        // Add datalabels plugin
        formatter: (value, ctx) => {
          if (expenses && expenses.length > 0) {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            const sum = expenses.reduce(
              (acc, expense) => acc + expense.amount,
              0
            );
            const percentage = (value / sum) * 100;
            return `${percentage.toFixed(0)}% ${label}`;
          }
          return "";
        },
        anchor: "center", // Center the labels in the slice
        align: "center", // Align text in the middle
        color: "#fff", // White text color for labels
        font: {
          weight: "bold",
        },
        //offset: -10, // Push text slightly inwards
        clip: false, // Prevents text from being cut off
        padding: 5, // Adds some space around text
      },
    },

    cutout: "", // Adjust the cutout for a doughnut chart
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
      </div>
    </div>
  );
};

export default ExpenseChart;
