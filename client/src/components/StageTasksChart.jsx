import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StageTasksChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/tasks/stage/counts")
      .then(response => {
        const { statusCounts } = response.data.data;

        setChartData({
          labels: ["Task Stages"],
          datasets: [
            {
              label: "To Do",
              backgroundColor: "#FF6384",
              data: [statusCounts.todo],
              stack: "stack1",
            },
            {
              label: "In Progress",
              backgroundColor: "#FFCE56",
              data: [statusCounts.inProgress],
              stack: "stack1",
            },
            {
              label: "Completed",
              backgroundColor: "#36A2EB",
              data: [statusCounts.completed],
              stack: "stack1",
            }
          ]
        });
      })
      .catch(error => console.error("Error fetching stage-based task data:", error));
  }, []);

  return (
    <div className="chart-container" style={{ width: "500px", margin: "auto" }}>
      <h2>Task Stages Chart</h2>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Task Stages Distribution" }
            },
            scales: {
              x: { stacked: true },
              y: { stacked: true }
            }
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default StageTasksChart;
