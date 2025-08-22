"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card } from "../card";
import { Icon } from "../icon";
import { Text } from "../text";
import { ChartConfig, ChartContainer } from "./chart-components";

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface RadialChartProps {
  title: string;
  description: string;
  footerText: string;
  data: {
    browser: string;
    visitors: number;
    fill: string;
  }[];
}

export function RadialChart({
  description,
  footerText,
  title,
  data,
}: RadialChartProps) {
  return (
    <Card>
      <div className="items-center pb-0">
        <Text type="h1" noTranslate>
          {title}
        </Text>
        <Text className="text-black/80" noTranslate>
          {description}
        </Text>
      </div>
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={data}
            endAngle={100}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="last:fill-background first:border first:fill-white first:shadow"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-text text-4xl font-bold"
                        >
                          {data[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-text"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </div>
      <div className="flex-col gap-2 text-sm">
        <p className="flex items-center gap-2 leading-none text-black/50">
          Trending up by 5.2% this month <Icon name="ArrowUpRight" size={16} />
        </p>
        <Text className="leading-none text-black/40">{footerText}</Text>
      </div>
    </Card>
  );
}
