"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submissions } from "@/lib/data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

const statuses = ["New", "Quoted", "Bound", "Declined", "Overdue"];
const lobs = Array.from(new Set(submissions.map(s => s.lob)));
const states = Array.from(new Set(submissions.map(s => s.state))).sort();
const underwriters = Array.from(new Set(submissions.map(s => s.underwriter)));

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Select
          value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
          onValueChange={(value) => table.getColumn("status")?.setFilterValue(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map(status => <SelectItem key={status} value={status}>{status}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          value={(table.getColumn("lob")?.getFilterValue() as string) ?? ""}
          onValueChange={(value) => table.getColumn("lob")?.setFilterValue(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="LOB" />
          </SelectTrigger>
          <SelectContent>
            {lobs.map(lob => <SelectItem key={lob} value={lob}>{lob}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          value={(table.getColumn("state")?.getFilterValue() as string) ?? ""}
          onValueChange={(value) => table.getColumn("state")?.setFilterValue(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            {states.map(state => <SelectItem key={state} value={state}>{state}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          value={(table.getColumn("underwriter")?.getFilterValue() as string) ?? ""}
          onValueChange={(value) => table.getColumn("underwriter")?.setFilterValue(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Underwriter" />
          </SelectTrigger>
          <SelectContent>
            {underwriters.map(uw => <SelectItem key={uw} value={uw}>{uw}</SelectItem>)}
          </SelectContent>
        </Select>
        
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
