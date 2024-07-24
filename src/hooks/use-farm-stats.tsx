"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import { useGetAllFarmersData } from "@/hooks/use-get-all-farmers-data"
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

interface Farm {
  id: number
  cpf_or_cnpj: string
  producer_name: string
  farm_name: string
  city: string
  state: string
  total_area: number
  arable_area: number
  vegetation_area: number
  crops: string[]
}

const FarmStatsCard = () => {
  const { data: farmers, isLoading, isError } = useGetAllFarmersData()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !farmers) {
    return <div>Error loading farmers data</div>
  }

  const totalFarms = farmers.length
  const totalHectares = farmers.reduce(
    (acc: number, farmer) => acc + farmer.total_area,
    0
  )

  const statesData = Object.entries(
    farmers.reduce<{ [key: string]: number }>((acc, farmer) => {
      acc[farmer.state] = (acc[farmer.state] || 0) + 1
      return acc
    }, {})
  ).map(([name, value]) => ({ name, value }))

  const cropsData = Object.entries(
    farmers.reduce<{ [key: string]: number }>((acc, farmer) => {
      farmer.crops.forEach((crop) => {
        acc[crop] = (acc[crop] || 0) + 1
      })
      return acc
    }, {})
  ).map(([name, value]) => ({ name, value }))

  const landUseData = [
    {
      name: "Arable Area",
      value: farmers.reduce(
        (acc: number, farmer) => acc + farmer.arable_area,
        0
      ),
    },
    {
      name: "Vegetation Area",
      value: farmers.reduce(
        (acc: number, farmer) => acc + farmer.vegetation_area,
        0
      ),
    },
  ]

  const chartConfig: ChartConfig = {
    state: {
      label: "Farms by State",
    },
    crops: {
      label: "Farms by Crop",
    },
    landUse: {
      label: "Land Use",
    },
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Farm Statistics</CardTitle>
        <CardDescription>Current Statistics</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center">
            <div className="text-lg font-semibold">Total Farms</div>
            <div className="text-2xl">{totalFarms}</div>
            <div className="text-lg font-semibold">Total Hectares</div>
            <div className="text-2xl">{totalHectares} ha</div>
          </div>
          <div className="flex flex-col items-center">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] pb-0"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={statesData} dataKey="value" label nameKey="name" />
              </PieChart>
            </ChartContainer>
            <div className="text-center font-semibold">Farms by State</div>
          </div>
          <div className="flex flex-col items-center">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] pb-0"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={cropsData} dataKey="value" label nameKey="name" />
              </PieChart>
            </ChartContainer>
            <div className="text-center font-semibold">Farms by Crop</div>
          </div>
          <div className="flex flex-col items-center">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] pb-0"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={landUseData} dataKey="value" label nameKey="name" />
              </PieChart>
            </ChartContainer>
            <div className="text-center font-semibold">Land Use</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing statistics for the current period
        </div>
      </CardFooter>
    </Card>
  )
}

export default FarmStatsCard
