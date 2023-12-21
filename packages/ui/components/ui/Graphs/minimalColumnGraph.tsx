import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type MinimalColumnGraphProps = {
  chartData: { name: string; data: number[][] }[];
  color?: string[];
  theme: 'light' | 'dark';
  annotations?: any;
};

const MinimalColumnGraph: React.FC<MinimalColumnGraphProps> = ({
  chartData,
  color,
  theme,
  annotations,
}) => {
  const fontColor = theme === 'dark' ? 'white' : 'black';
  const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff';

  const data = {
    series: chartData,
    options: {
      chart: {
        type: 'bar',
        height: 80,
        stacked: false,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        parentHeightOffset: 0,
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        show: false,
        padding: { left: 30, right: 10, top: 0, bottom: 0 },
      },
      plotOptions: {
        bar: {
          columnWidth: '12%',
          ranges: [
            {
              from: 0,
              to: 0,
              color: color,
            },
          ],
          backgroundBarColors: color,
          borderRadius: 1,
          borderRadiusApplication: 'around',
        },
      },
      dataLabels: {
        enabled: false,
      },
      annotations: annotations,
      markers: {
        size: 0,
      },
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'right',
        offsetX: -10,
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
        // shared: true,
        theme: theme,
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
              style="border: 0px; outline: 0px; display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start; background-color: ${surfaceColor}; padding: 8px; gap: 8px; align-items: center;"
            >
              <div style="display: flex; justify-content: space-between;">
                <span style="color: ${fontColor};  font-size: 14px; opacity: 50%;">${date}:</span>
              </div>
              <span style="color: ${fontColor}; fontWeight: 500;  font-size: 14px">
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
        type={'bar'}
        height={80}
      />
    </div>
  );
};
export { MinimalColumnGraph };
