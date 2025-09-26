"use client"

import { Table } from "@tanstack/react-table"
import { RefreshCw, BarChart2, List, Settings2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Button variant="ghost" size="icon">
            <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
            <BarChart2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
            <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
            <Settings2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
