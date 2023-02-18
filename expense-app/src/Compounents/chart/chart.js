import React from "react";
import { Bar } from "react-chartjs-2";
function Chart() {
  const data = {
    labels: ["cat", "dog", "fish"],
    datasets: [
      {
        label: "months",
        data: [50, 12, 23],
        backgroundColor: ["red", "green", "blue"],
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default Chart;
