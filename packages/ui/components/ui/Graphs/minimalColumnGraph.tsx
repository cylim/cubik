import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type MinimalColumnGraphProps = {
  chartData: { name: string; data: number[][] }[];
  color?: string[];
};

const MinimalColumnGraph: React.FC<MinimalColumnGraphProps> = ({
  chartData,
  color,
}) => {
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
