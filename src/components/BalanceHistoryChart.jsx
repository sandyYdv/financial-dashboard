import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useAppContext } from "../context/AppContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BalanceHistoryChart = () => {
  const { balanceHistory } = useAppContext();
  const data = {
    labels: balanceHistory.map((item) => item.month),
    datasets: [
      {
        label: "Balance",
        data: balanceHistory.map((item) => item.balance),
        fill: true,
        backgroundColor: "rgba(173, 216, 230, 0.3)",
        borderColor: "#00008B",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
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
        ticks: {
          stepSize: 2000,
          callback: function (value, index, values) {
            return value;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div style={{ height: "190px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
