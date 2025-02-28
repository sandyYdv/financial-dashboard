import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useAppContext } from "../context/AppContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivityChart = () => {
  const { weeklyActivity } = useAppContext();
  const data = {
    labels: weeklyActivity.map((item) => item.day),
    datasets: [
      {
        label: "Deposit",
        data: weeklyActivity.map((item) => item.deposit),
        backgroundColor: "#3b82f6",
        barThickness: 15,
        borderRadius: 10,
        barPercentage: 0.6,
      },
      {
        label: "Withdraw",
        data: weeklyActivity.map((item) => item.withdraw),
        backgroundColor: "#1f2937",
        barThickness: 15,
        borderRadius: 10,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
        datalabels: {
          display: false,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
      <div className="rounded-lg h-[300px] bg-white">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
