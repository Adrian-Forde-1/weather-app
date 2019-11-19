import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => {
  //   console.log(props.props.day1.threeHourTemps);
  let labelValues = [...props.props.day1.threeHourTemps];
  let dataValues = [...props.props.day1.threeHourTemps];

  let data = {
    labels: labelValues,
    datasets: [
      {
        label: "Difference In Temperature Temperature",
        data: [...dataValues],
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 1,
        fill: true,
        pointHoverBackgroundColor: "rgba(0, 0, 255, 0.8)"
      }
    ]
  };

  let options = {
    title: {
      display: true,
      text: "Temperature Every Three Hours",
      fontSize: 25,
      fontColor: "rgb(255, 255, 255)"
    }
  };

  return (
    <div>
      <Line data={data} width={500} height={300} options={options}></Line>
    </div>
  );
};

export default Chart;
