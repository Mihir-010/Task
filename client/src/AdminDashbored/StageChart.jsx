
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// Import the new CSS file

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const StageChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["To Do", "In Progress", "Completed"],
    datasets: [
      {
        label: "Tasks by Status",
        backgroundColor: ["#ff6b6b", "#ffb347", "#4bc0c0"], // Updated Colors
        borderWidth: 2,
        data: [0, 0, 0], // Initial Data
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tasks/stage/counts/");
        const data = await response.json();

        if (data && data.data.statusCounts) {
          const { todo, inProgress, completed } = data.data.statusCounts;

          setChartData({
            labels: ["Pending", "Ongoing", "Done"], // Custom Status Labels
            datasets: [
              {
                ...chartData.datasets[0],
                backgroundColor: ["#FF6F61", "#FFD166", "#06D6A0"], // New Colors
                data: [todo || 0, inProgress || 0, completed || 0],
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching task status counts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Tasks by Status</h2>
      <div className="chart-wrapper">
        <Pie
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: "#333", // Dark text for better visibility
                },
              },
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default StageChart;
