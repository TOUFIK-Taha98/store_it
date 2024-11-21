"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { calculatePercentage, convertFileSize } from "@/lib/utils";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

const chartConfig = {
  size: {
    label: "Size",
  },
  used: {
    color: "white",
    label: "Used",
  },
} satisfies ChartConfig;

export const Chart = ({ used = 0 }: { used: number }) => {
  const chartData = [{ 10: used, fill: "white", storage: "used" }];

  return (
    <Card className="chart">
      <CardContent className="flex-1 p-0">
        <ChartContainer className="chart-container" config={chartConfig}>
          <RadialBarChart
            data={chartData}
            endAngle={Number(calculatePercentage(used)) + 90}
            innerRadius={80}
            outerRadius={110}
            startAngle={90}
          >
            <PolarGrid
              className="polar-grid"
              gridType="circle"
              polarRadius={[86, 74]}
              radialLines={false}
              stroke="none"
            />
            <RadialBar background cornerRadius={10} dataKey="storage" />
            <PolarRadiusAxis axisLine={false} tick={false} tickLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        dominantBaseline="middle"
                        textAnchor="middle"
                        x={viewBox.cx}
                        y={viewBox.cy}
                      >
                        <tspan
                          className="chart-total-percentage"
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          {used && calculatePercentage(used)
                            ? calculatePercentage(used)
                                .toString()
                                .replace(/^0+/, "")
                            : "0"}
                          %
                        </tspan>
                        <tspan
                          className="fill-white/70"
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                        >
                          Space used
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardHeader className="chart-details">
        <CardTitle className="chart-title">Available Storage</CardTitle>
        <CardDescription className="chart-description">
          {used ? convertFileSize(used) : "2GB"} / 2GB
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
