"use client";

import * as React from "react";
import { Table as TanstackTable } from "@tanstack/react-table";

import { submissions as defaultSubmissions } from "@/lib/data";
import { Submission } from "@/lib/types";
import { DataTable } from "@/components/workbench/data-table";
import { getColumns } from "@/components/workbench/columns";
import { WorkbenchTabs } from "@/components/workbench/workbench-tabs";
import { AddTaskSheet } from "@/components/workbench/add-task-sheet";
import { SubmissionDetails } from "@/components/workbench/submission-details";

export function WorkbenchClient() {
  const [submissions] = React.useState<Submission[]>(defaultSubmissions);
  const [rowSelection, setRowSelection] = React.useState({});
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [selectedSubmission, setSelectedSubmission] = React.useState<Submission | null>(null);
  
  let tableRef: TanstackTable<Submission> | null = null;
  
  const handleViewSubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
  };

  const handleBackToWorkbench = () => {
    setSelectedSubmission(null);
  };
  
  const columns = getColumns(handleViewSubmission);

  if (selectedSubmission) {
    return (
      <main>
        <SubmissionDetails submission={selectedSubmission} onBack={handleBackToWorkbench} />
      </main>
    )
  }

  return (
      <main>
        <WorkbenchTabs onTasksClick={() => setIsSheetOpen(true)} />
        <DataTable
          columns={columns}
          data={submissions}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          setTable={(t) => (tableRef = t)}
        />
        <AddTaskSheet isOpen={isSheetOpen} onOpenChange={setIsSheetOpen} />
      </main>
  );
}
