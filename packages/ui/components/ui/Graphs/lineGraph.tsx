import React from 'react';
// import dynamic from 'next/dynamic';

// const ReactApexChart = dynamic(() => import('react-apexcharts'), {
//   ssr: false,
// });
import Chart from 'react-apexcharts';

type LineChartProps = {
  chartData: { name: string; data: number[][] }[];
  xAxis: any;
  //{ categories: string[]; title: { text: string } };
};

const LineChart: React.FC<LineChartProps> = ({ chartData, xAxis }) => {
  const data = {
    series: chartData,
    options: {
      xaxis: xAxis,
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      yaxis: {
        title: {
          text: 'Temperature',
        },
        min: 5,
        max: 40,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  return (
    <div>
      <Chart
        //@ts-ignore
        options={data.options}
        series={data.series}
        type={'line'}
        height={350}
      />
    </div>
  );
};
export { LineChart };
