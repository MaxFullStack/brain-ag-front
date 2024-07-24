"use client"

import React, { useState } from "react"

import { useGetAllFarmers } from "@/hooks/use-get-farmers-page"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const FarmersTableSection = () => {
  const [page, setPage] = useState(1)
  const pageSize = 10
  const { data: farmersData, isLoading, isError } = useGetAllFarmers()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (isError || !farmersData) {
    return <div>Erro ao carregar dados dos fazendeiros</div>
  }

  const farmers = farmersData.slice((page - 1) * pageSize, page * pageSize)
  const totalPages = Math.ceil(farmersData.length / pageSize)

  return (
    <div>
      <h1 className="mb-8 ml-4 text-center text-2xl font-semibold">
        Lista de Fazendas
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cidade</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Nome da Fazenda</TableHead>
            <TableHead>Nome do Produtor</TableHead>
            <TableHead>Área Total (ha)</TableHead>
            <TableHead>Área Arável (ha)</TableHead>
            <TableHead>Área de Vegetação (ha)</TableHead>
            <TableHead>Culturas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {farmers.map((farmer) => (
            <TableRow key={farmer.id}>
              <TableCell>{farmer.city}</TableCell>
              <TableCell>{farmer.state}</TableCell>
              <TableCell>{farmer.farm_name}</TableCell>
              <TableCell>{farmer.producer_name}</TableCell>
              <TableCell>{farmer.total_area}</TableCell>
              <TableCell>{farmer.arable_area}</TableCell>
              <TableCell>{farmer.vegetation_area}</TableCell>
              <TableCell>{farmer.crops.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={8}>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (page > 1) setPage((prev) => Math.max(prev - 1, 1))
                      }}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        isActive={index + 1 === page}
                        onClick={(e) => {
                          e.preventDefault()
                          setPage(index + 1)
                        }}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (page < totalPages) setPage((prev) => prev + 1)
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default FarmersTableSection
