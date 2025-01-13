"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useSWR from "swr";
import { fetchData } from "@/lib/fetchData";
import { ChartData } from "@/types";

const chartConfig = {
  desktop: {
    label: "Requst",
    color: "#344CB7",
  },
} satisfies ChartConfig;

export function Chart() {
  const { data } = useSWR(
    `https://payguard-tan.vercel.app/api/admin/analytics/chart`,
    async (url: string) => fetchData<ChartData>(url)
  );

  const chartData = [
    { month: "December", desktop: data?.December },
    { month: "November", desktop: data?.November },
    { month: "January", desktop: data?.January },
  ];

  return (
    <>
      {data && (
        <Card className="mt-6 bg-transparent border-none w-[380px] lg:w-[600px] mx-auto">
          <CardHeader>
            <CardTitle className="text-white">Payment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  last activity
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
