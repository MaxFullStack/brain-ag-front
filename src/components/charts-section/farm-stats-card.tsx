"use client"

import { TrendingUp } from "lucide-react"

import { useGetAllFarmersData } from "@/hooks/use-get-all-farmers-data"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import ChartCard from "./chart-card"
import ExampleChartCard from "./chart-card"

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

  const chartConfig = {
    state: {
      label: "Farms by State",
      color: "hsl(var(--chart-1))",
    },
    crops: {
      label: "Farms by Crop",
      color: "hsl(var(--chart-2))",
    },
    landUse: {
      label: "Land Use",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <div className="flex flex-col space-y-8">
      <Card className="flex flex-col py-4">
        <CardHeader className="items-center">
          <CardTitle>Estatísticas das Fazendas</CardTitle>
          <CardDescription>Estatísticas Atuais</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="mb-8 flex md:w-1/4 md:flex-col md:items-center md:space-x-0 md:pr-6">
              <div className="border p-4 text-center md:w-full md:items-center">
                <div className="mb-2 text-lg font-semibold">
                  Total de Fazendas
                </div>
                <div className="text-2xl font-bold">{totalFarms}</div>
              </div>
              <div className="items-center border p-4 text-center md:w-full">
                <div className="mb-2 text-lg font-semibold">
                  Total de Hectares
                </div>
                <div className="whitespace-nowrap text-2xl font-bold">
                  {totalHectares} ha
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col justify-around space-y-8 md:w-3/4 md:flex-row md:space-y-0">
              <div className="flex w-full flex-col items-center md:w-1/3 md:flex-row">
                <ChartCard
                  title="Fazendas por Estado"
                  data={statesData}
                  config={chartConfig.state}
                />
              </div>
              <div className="flex w-full flex-col items-center md:w-1/3">
                <ChartCard
                  title="Fazendas por Cultura"
                  data={cropsData}
                  config={chartConfig.crops}
                />
              </div>
              <div className="flex w-full flex-col items-center md:w-1/3">
                <ChartCard
                  title="Por utilização do solo"
                  data={landUseData}
                  config={chartConfig.landUse}
                />
              </div>
            </div>
          </div>
        </CardContent>
        {/*     <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Aumento de 5.2% este mês <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Mostrando estatísticas do período atual
          </div>
        </CardFooter> */}
      </Card>
    </div>
  )
}

export default FarmStatsCard
