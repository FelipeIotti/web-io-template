"use client";

import { useState } from "react";
import {
  Bar,
  BarChart as BarChartRechart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { CartesianLayout } from "recharts/types/util/types";
import { Modal } from "../modal";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart-components";

const CLASSIFICATION_COLORS = ["var(--color-primary)"];

interface BarChartProps {
  title: string;
  quantityPreview?: number;
  data: { name: string; value: number }[];
  layout?: CartesianLayout;
}
const chartConfig = {
  desktop: {
    label: "name",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function BarChart({
  data,
  title,
  quantityPreview = 5,
  layout = "horizontal",
}: BarChartProps) {
  const [showExpanded, setShowExpanded] = useState(false);
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  const firstData = sortedData.slice(0, quantityPreview);

  return (
    <div className="rounded border p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs ">{title}</p>

        {sortedData.length > quantityPreview && (
          <div
            className="cursor-pointer hover:opacity-60"
            onClick={() => setShowExpanded(true)}
          >
            <p className="text-xs">ver mais</p>
          </div>
        )}
      </div>

      <ChartContainer config={chartConfig} className="h-full w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChartRechart accessibilityLayer data={firstData} layout={layout}>
            <XAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 10 }}
              interval={0}
              tickMargin={10}
            />
            <YAxis
              dataKey="value"
              width={20}
              type="number"
              tick={{ fontSize: 10 }}
              interval={0}
              tickMargin={10}
            />
            <ChartTooltip content={<ChartTooltipContent />} />

            <Bar dataKey="value">
              {sortedData.map((_, index) => (
                <Cell
                  key={`cell-type-${index}`}
                  fill={
                    CLASSIFICATION_COLORS[index % CLASSIFICATION_COLORS.length]
                  }
                />
              ))}
            </Bar>
          </BarChartRechart>
        </ResponsiveContainer>
      </ChartContainer>

      <Modal show={showExpanded} setShow={setShowExpanded} width="large">
        <p className="text-primary text-sm font-bold">{title}</p>
        <ChartContainer config={chartConfig} className=" pt-4 ">
          <div className="w-full" style={{ height: "70vh" }}>
            <div className="h-full w-full overflow-x-auto">
              <div
                style={{
                  width: `${sortedData.length * 90}px`,
                  minWidth: "100%",
                  height: "100%",
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChartRechart data={sortedData}>
                    <YAxis type="number" tickMargin={10} />
                    <XAxis
                      dataKey="name"
                      type="category"
                      tick={(props) => <CustomTick {...props} />}
                      interval={0}
                      tickMargin={1}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value">
                      {sortedData.map((_, index) => (
                        <Cell
                          key={`cell-type-${index}`}
                          fill={
                            CLASSIFICATION_COLORS[
                              index % CLASSIFICATION_COLORS.length
                            ]
                          }
                        />
                      ))}
                    </Bar>
                  </BarChartRechart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </ChartContainer>
      </Modal>
    </div>
  );
}
function CustomTick({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: { value: string };
}) {
  const maxLength = 12;
  const fullText = payload.value;
  const truncated =
    typeof fullText === "string" && fullText.length > maxLength
      ? fullText.substring(0, maxLength - 3) + "..."
      : fullText;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#888"
        fontSize={10}
        style={{ pointerEvents: "all" }}
      >
        {truncated}
      </text>
    </g>
  );
}
