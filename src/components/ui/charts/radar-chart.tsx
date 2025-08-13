"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart as RechartsRadarChart,
} from "recharts";
import { Card } from "../card";
import { Icon } from "../icon";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart-components";

export const description = "A radar chart with a custom label";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function RadarChart() {
  return (
    <Card>
      <div className="items-center pb-4">
        <h1>Radar Chart - Custom Label</h1>
        <p>Showing total visitors for the last 6 months</p>
      </div>
      <div className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RechartsRadarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis
              dataKey="month"
              tick={({ x, y, textAnchor, index, ...props }) => {
                const data = chartData[index];

                return (
                  <text
                    x={x}
                    y={index === 0 ? (y as number) - 10 : y}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                  >
                    <tspan className="fill-text">{data.desktop}</tspan>
                    <tspan className="fill-text">/</tspan>
                    <tspan className="fill-text">{data.mobile}</tspan>
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-text"
                    >
                      {data.month}
                    </tspan>
                  </text>
                );
              }}
            />

            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.6}
            />
          </RechartsRadarChart>
        </ChartContainer>
      </div>
      <div className="flex-col gap-2 text-sm">
        <p className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <Icon name="ArrowUpRight" size={16} />
        </p>
        <p className="text-muted-foreground flex items-center gap-2 leading-none">
          January - June 2024
        </p>
      </div>
    </Card>
  );
}
