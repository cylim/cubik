import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type MinimalLineGraphProps = {
  chartData: { name: string; data: number[][] }[];
};

const MinimalLineGraph: React.FC<MinimalLineGraphProps> = ({ chartData }) => {
  const data = {
    series: chartData,
    options: {
      chart: {
        type: 'area',
        stacked: false,
        toolbar: {
          show: false,
        },
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      grid: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: undefined,
        width: 3,
        dashArray: 0,
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'right',
        offsetX: -10,
      },
      fill: {
        colors: ['#1199FF'],
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: ['#1199FF'],
          shadeIntensity: 2,
          opacityFrom: 0.5,
          opacityTo: 0.1,
          stops: [0, 90],
        },
      },
      noData: {
        text: 'No Data to display',
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
      },
      forecastDataPoints: {
        count: 0,
        fillOpacity: 0.2,
        strokeWidth: 1,
        dashArray: 6,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      yaxis: {
        lines: {
          show: false,
        },
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false,
        },
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      tooltip: {
        shared: true,
        custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
          const data = series[seriesIndex][dataPointIndex];
          const timestamp = w.globals.seriesX[seriesIndex][dataPointIndex];
          const date = new Date(timestamp)
            .toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'long',
            })
            .replace(/\s\d{4}$/, ''); // Removes the year part

          return `
          <div
          class="arrow_box"
          style="display: flex; border: 1px solid red;  flex-direction: column; align-items: flex-start; justify-content: flex-start; background-color: white; padding: 16px; gap: 8px; align-items: center;"
        >
          <div style="display: flex; border: 1px solid red; justify-content: space-between;">
            <span style="color: black;">${date}</span>
          </div>
          <div style="display: flex;border: 1px solid red;">
            <span style="color: black; fontWeight: 500;">
              ${chartData[0].name} - 
            </span>
            <span style="color: black; fontWeight: 600;">
              <strong>$${data}</strong>
            </span>
          </div>
        </div>
          `;
        },
      },
    },
  };
  return (
    <div>
      <Chart
        options={data.options as any}
        series={data.series}
        type={'area'}
        height={350}
      />
    </div>
  );
};
export { MinimalLineGraph };
