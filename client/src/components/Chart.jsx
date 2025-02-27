
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/tasks/counts/Priority")
      .then(response => {
        const { labels, datasets } = response.data.data;
        setChartData({
          labels,
          datasets: [
            {
              label: datasets[0].label,
              backgroundColor: datasets[0].backgroundColor,
              data: datasets[0].data
            }
          ]
        });
      })
      .catch(error => console.error("Error fetching task priority data:", error));
  }, []);

  return (
    <div className="chart-container" style={{ width: "500px", margin: "auto" }}>
      <h2>Task Priority Chart</h2>
      {chartData ? <Bar data={chartData} options={{ responsive: true }} /> : <p>Loading chart...</p>}
    </div>
  );
};


