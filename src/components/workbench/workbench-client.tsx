"use client";

import * as React from "react";
import { Table as TanstackTable } from "@tanstack/react-table";

import { submissions as defaultSubmissions } from "@/lib/data";
import { Submission } from "@/lib/types";
import { DataTable } from "@/components/workbench/data-table";
import { columns } from "@/components/workbench/columns";


export function WorkbenchClient() {
  const [submissions] = React.useState<Submission[]>(defaultSubmissions);
  const [rowSelection, setRowSelection] = React.useState({});

  let tableRef: TanstackTable<Submission> | null = null;


  return (
      <main>
        <DataTable
          columns={columns}
          data={submissions}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          setTable={(t) => (tableRef = t)}
        />
      </main>
  );
}
