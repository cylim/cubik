import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type LineGraphProps = {
  chartData: { name: string; type: string; data: number[][] }[];
  color: string[];
  theme?: 'light' | 'dark';
  annotations?: any;
};

const LineGraph: React.FC<LineGraphProps> = ({
  chartData,
  color,
  theme,
  annotations,
}) => {
  const textColorPrimary = theme === 'dark' ? 'white' : 'black';
  const textColorSecondary = theme === 'dark' ? '#999999' : '#666666';
  const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff';
  const gridColor = theme === 'dark' ? '#333333' : '#E0E0E0';
  const crosshairBorderColor = theme === 'dark' ? '#7E7E7E' : '#1A1A1A';
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
        sparkline: {
          enabled: true,
        },
        dataLabels: {
          enable: true,
        },
      },
      stroke: {
        show: [false, true],
        curve: 'smooth',
        lineCap: 'round',
        colors: color,
        width: 2,
        dashArray: 0,
      },
      grid: {
        show: true,
        borderColor: gridColor,
        strokeDashArray: 8,
        position: 'front',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: { left: 20, right: 10, top: 0, bottom: 0 },
      },
      markers: {
        size: 0,
        colors: color,
        strokeWidth: 0,
      },
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'right',
        offsetX: -10,
      },
      fill: {
        colors: color,
        opacity: [0.85, 0.25, 1],
        type: ['gradient', 'gradient', 'gradient'],
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
      annotations: annotations,
      noData: {
        text: 'No Data to display',
      },
      plotOptions: {
        area: {
          fillTo: 'end',
        },
        bar: {
          columnWidth: '100%',
          backgroundBarColors: color,
          borderRadius: 1,
          borderRadiusApplication: 'around',
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
        show: true,
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
          show: true,
          opacity: 0.5,
          stroke: {
            color: crosshairBorderColor,
            width: 1,
            dashArray: 8,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: true,
          trim: true,
          style: {
            colors: [],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          },
          format: undefined,
          formatter: undefined,
          datetimeUTC: true,
          datetimeFormatter: {
            year: 'yyyy',
            month: "MMM 'yy",
            day: 'dd MMM',
            hour: 'HH:mm',
          },
        },
        lines: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
        crosshairs: {
          show: true,
          opacity: 0.5,
          stroke: {
            color: crosshairBorderColor,
            width: 1,
            dashArray: 8,
          },
        },
        tooltip: {
          enabled: false,
          custom: undefined,
        },
      },
      tooltip: {
        shared: true,
        theme: theme,
        custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
          const data = series.map((s: { [x: string]: any }) => {
            return s[dataPointIndex];
            //return index === 0 ? `$${s[dataPointIndex]}` : s[dataPointIndex];
          });
          const timestamp = w.globals.seriesX[seriesIndex][dataPointIndex];
          const date = new Date(timestamp).toLocaleDateString(undefined, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          });

          const seriesHtml = data
            .map((item: any, index: number) => {
              return item
                ? `<div
                  style="display: flex; align-items: flex-start; justify-content: flex-start;"
                >
                  <span
                    style="height: 10px; width: 10px; margin-top: 4px; background-color: ${color[index]}; border-radius: 50%; display: inline-block; margin-right: 8px;"
                  ></span>
                  <div
                    style="display: flex; flex-direction: column; align-items: start; justify-content: center;"
                  >
                    <div
                      style="font-size: 12px; color: ${textColorSecondary};"
                    >
                      ${w.globals.seriesNames[index]}
                    </div>
                    <span
                      style="font-size: 18px; color: ${textColorPrimary}; font-weight: 600;"
                    >
                      ${item}
                    </span>
                  </div>
                </div>`
                : '';
            })
            .join('');

          return `<div
                    style="background-color: ${surfaceColor}; border-radius: 8px; padding: 16px; width: 'fit-content'; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: inline-block; font-family: Arial, sans-serif; font-size: 14px;"
                  >
                    <div
                      style="margin-bottom: 16px; font-size: 14px; color: ${textColorPrimary};"
                    >
                      ${date}
                    </div>
                    <div
                      style="display: flex; gap: 24px; flex-direction: row; align-items: flex-start; justify-content: flex-start;"
                    >
                      ${seriesHtml}
                    </div>
                  </div>`;
        },
      },
    },
  };
  return (
    <div className="w-full overflow-visible align-bottom min-h-[300px]">
      <Chart
        options={data.options as any}
        series={data.series}
        type={'area'}
        width={'100%'}
        height={300}
      />
    </div>
  );
};
export { LineGraph };
