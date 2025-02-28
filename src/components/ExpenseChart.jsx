import React from "react";
import { useAppContext } from "../context/AppContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { PolarArea } from "react-chartjs-2";

const ExpenseChart = () => {
  const { expenses } = useAppContext();
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels,
    RadialLinearScale
  );
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
    width: 300,
    height: 300,
    scales: {
      r: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          const sum = expenses.reduce(
            (acc, expense) => acc + expense.amount,
            0
          );
          const percentage = ((value / sum) * 100).toFixed(0);

          return `${percentage}%\n${label}`;
        },
        anchor: "center",
        align: "center",
        color: "#fff",

        font: {
          size: 10,
          weight: "bold",
        },
        clip: true,
        padding: 0,
      },
    },
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Expense Statistics</h2>
      <div className="relative h-75 bg-white rounded-lg p-6">
        <PolarArea
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
