import React from 'react'
import { Pie } from 'react-chartjs-2';

export const SecondPieChart = () => {
    const data = {
        labels: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        datasets: [
          {
            data: [40, 20, 8, 15, 10, 7, 10],
            backgroundColor:[
              "#4FB61E",
              "#0AA0C1",
              "#E43D3D",
              "#B65E1E",
              "#FFDC23",
              "#B31EB6",
              "#FF9D0A"
            ]
          },
        ],
      };
      return (
        <div>
          <h3>Активность заказов за неделю</h3>
          <div style={{width:"350px"}}>
            <Pie data={data} />
          </div>
        </div>
      );
}
