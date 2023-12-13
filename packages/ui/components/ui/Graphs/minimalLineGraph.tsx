import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type MinimalLineGraphProps = {
  chartData: { name: string; data: number[][] }[];
  color?: string[];
  theme: 'light' | 'dark';
};

const MinimalLineGraph: React.FC<MinimalLineGraphProps> = ({
  chartData,
  color,
  theme,
}) => {
  const fontColor = theme === 'dark' ? 'white' : 'black';
  const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff';
  const data = {
    series: chartData,
    options: {
      theme: {
        mode: 'light',
        monochrome: {
          enabled: true,
        },
      },
      chart: {
        type: 'area',
        height: 80,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: color,
        width: 2,
        dashArray: 0,
      },
      // dataLabels: {
      //   enabled: false,
      // },
      grid: {
        show: false,
        padding: { left: 20, right: 10, top: 0, bottom: 0 },
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
        colors: color,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          gradientToColors: color,
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
              month: 'short',
            })
            .replace(/\s\d{4}$/, ''); // Removes the year part

          return `
          <div
          class="arrow_box"
          style="border: 0px; outline: 0px; display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start; background-color: ${surfaceColor}; padding: 8px; gap: 4px; align-items: center;"
        >
          <div style="display: flex; justify-content: space-between;">
            <span style="color: ${fontColor};  font-size: 12px; opacity: 50%;">${date}:</span>
          </div>
            <span style="color: ${fontColor}; fontWeight: 600;  font-size: 12px">
              <strong>$${data}</strong>
            </span>
        </div>
          `;
        },
      },
    },
  };
  return (
    <div className="max-h-[100px] overflow-visible flex align-bottom items-end">
      <Chart
        options={data.options as any}
        series={data.series}
        type={'area'}
        height={80}
      />
    </div>
  );
};
export { MinimalLineGraph };
