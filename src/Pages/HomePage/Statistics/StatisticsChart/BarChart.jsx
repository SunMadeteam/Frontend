import React from 'react'
import {Pie} from "react-chartjs-2"
import {Doughnut} from "react-chartjs-2"
export const BarChart = () => {
  const data = { 
    labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets:[{
      data:[12, 19, 3, 4, 10, 20]
    },],
  };
  return (
    <div>
        <Doughnut 
             data={data}
        />
    </div>
  )
}
