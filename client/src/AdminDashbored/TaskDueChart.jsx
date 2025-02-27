// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";

// const TasksDueChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     fetch("http://localhost:3000/api/tasks/due/tasks")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status) {
//           const tasks = data.tasks;
//           const dueDates = {};

//           tasks.forEach((task) => {
//             const date = new Date(task.date).toISOString().split("T")[0];
//             dueDates[date] = (dueDates[date] || 0) + 1;
//           });

//           setChartData({
//             labels: Object.keys(dueDates),
//             datasets: [
//               {
//                 label: "Tasks Due",
//                 data: Object.values(dueDates),
//                 backgroundColor: "rgba(54, 162, 235, 0.6)",
//                 borderColor: "rgba(54, 162, 235, 1)",
//                 borderWidth: 1,
//               },
//             ],
//           });
//         }
//       })
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, []);

//   return (
//     <div>
//       <h2>Tasks Due Chart</h2>
//       <Bar data={chartData} />
//     </div>
//   );
// };

// export default TasksDueChart;
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const TasksDueChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks/due/tasks")
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          const tasks = data.tasks;
          const dueDates = {};

          tasks.forEach((task) => {
            const date = new Date(task.date).toISOString().split("T")[0];
            dueDates[date] = (dueDates[date] || 0) + 1;
          });

          setChartData({
            labels: Object.keys(dueDates),
            datasets: [
              {
                label: "Tasks Due",
                data: Object.values(dueDates),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
                fill: false,
              },
            ],
          });
        }
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <h2>Tasks Due Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default TasksDueChart;
