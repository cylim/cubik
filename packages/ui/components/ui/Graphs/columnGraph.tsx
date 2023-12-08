import React from 'react';
// import dynamic from 'next/dynamic';

// const ReactApexChart = dynamic(() => import('react-apexcharts'), {
//   ssr: false,
// });
import Chart from 'react-apexcharts';

type ColumnGraphProps = {
  chartData: { name: string; data: number[][] }[];
  xAxis: any;
  //{ categories: string[]; title: { text: string } };
};

const ColumnGraph: React.FC<ColumnGraphProps> = ({ chartData, xAxis }) => {
  const data = {
    series: chartData,
    options: {
      xaxis: xAxis,
      chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Average High & Low Temperature',
        align: 'left',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
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
      //   annotations: {
      //     yaxis: [
      //       {
      //         y: 8800,
      //         borderColor: '#00E396',
      //         label: {
      //           borderColor: '#00E396',
      //           style: {
      //             color: '#fff',
      //             background: '#00E396',
      //           },
      //           text: 'Y-axis annotation on 8800',
      //         },
      //       },
      //     ],
      //   },
    },
  };
  return (
    <div>
      <Chart
        //@ts-expect-error
        options={data.options}
        series={data.series}
        type={'line'}
        height={350}
      />
    </div>
  );
};
export { ColumnGraph };
