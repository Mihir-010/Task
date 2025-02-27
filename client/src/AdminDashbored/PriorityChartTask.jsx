// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";


// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const PriorityChartTask = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Total Tasks",
//         backgroundColor: "#8a7efb",
//         data: [],
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/tasks/counts/Priority/");
//         const data = await response.json();

//         if (data && data.status) {
//           setChartData({
//             labels: data.data.labels,
//             datasets: [
//               {
//                 label: "Total Tasks",
//                 backgroundColor: "#8a7efb",
//                 data: data.data.datasets[0].data,
//               },
//             ],
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching priority task counts:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="priority-chart-container">
//       <h2 className="priority-chart-title">Performance Overview</h2>
//       <div className="priority-chart-wrapper">
//         <Bar
//           data={chartData}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//               legend: {
//                 display: false, // Hides legend since we have only one dataset
//               },
//               tooltip: {
//                 enabled: true,
//               },
//             },
//             scales: {
//               y: {
//                 beginAtZero: true,
//                 ticks: { color: "#333" },
//               },
//               x: {
//                 ticks: { color: "#333" },
//               },
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriorityChartTask;
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const PriorityChartTask = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Tasks",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Initial colors
        data: [],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tasks/counts/Priority/");
        const data = await response.json();

        if (data && data.status) {
          const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]; // Assign unique colors

          setChartData({
            labels: data.data.labels,
            datasets: [
              {
                label: "Total Tasks",
                backgroundColor: colors.slice(0, data.data.labels.length), // Assign colors dynamically
                data: data.data.datasets[0].data,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching priority task counts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="priority-chart-container">
      <h2 className="priority-chart-title">Performance Overview</h2>
      <div className="priority-chart-wrapper">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false, // Hides legend since we have only one dataset
              },
              tooltip: {
                enabled: true,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: "#333" },
              },
              x: {
                ticks: { color: "#333" },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default PriorityChartTask;
