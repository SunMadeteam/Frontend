import React from "react";
import { Pie } from "react-chartjs-2";

export const BarChart = () => {
  const data = {
    
    datasets: [
      {
        data: [40, 20, 8, 15, 10, 7],
        backgroundColor:[
          "#4FB61E",
          "#0AA0C1",
          "#E43D3D",
          "#B65E1E",
          "#FFDC23",
          "#B31EB6"
        ]
      },
    ],
    labels: ["Сад", "Дом", "Для подарка", "Почва", "Питание", "Аксессуары"],
  };
  return (
    <div>
      <h3>Часто покупаемые растения</h3>
      <div style={{width:"350px"}}>
        <Pie data={data} />
      </div>
    </div>
  );
};
