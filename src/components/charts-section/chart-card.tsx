"use client"

import { getRandomColors } from "@/utils/get-random-color"
import { TrendingUp } from "lucide-react"
import { Cell, LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type ChartCardProps = {
  title: string
  data: any[]
  config: { label: string }
}

const ChartCard = ({ title, data, config }: ChartCardProps) => {
  const colors = getRandomColors(data.length)

  const chartConfig: ChartConfig = {
    [config.label]: { label: config.label },
  }

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="items-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-[3/4] max-h-[250px] [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey="value" label nameKey="name">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
              <LabelList
                dataKey="name"
                className="fill-background font-semibold"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label || value
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/*  <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}

export default ChartCard
