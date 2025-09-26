"use client";

import * as React from "react";
import { Table as TanstackTable } from "@tanstack/react-table";

import { submissions as defaultSubmissions, workItems as defaultWorkItems } from "@/lib/data";
import { Submission, WorkItem } from "@/lib/types";
import { DataTable } from "@/components/workbench/data-table";
import { getColumns, getWorkItemColumns } from "@/components/workbench/columns";
import { WorkbenchTabs } from "@/components/workbench/workbench-tabs";
import { AddTaskSheet } from "@/components/workbench/add-task-sheet";
import { SubmissionDetails } from "@/components/workbench/submission-details";
import { WorkItemDetails } from "@/components/workbench/work-item-details";

export function WorkbenchClient() {
  const [submissions] = React.useState<Submission[]>(defaultSubmissions);
  const [workItems] = React.useState<WorkItem[]>(defaultWorkItems);
  const [rowSelection, setRowSelection] = React.useState({});
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [selectedSubmission, setSelectedSubmission] = React.useState<Submission | null>(null);
  const [selectedWorkItem, setSelectedWorkItem] = React.useState<WorkItem | null>(null);
  const [activeTab, setActiveTab] = React.useState("My Submissions");

  
  let tableRef: TanstackTable<Submission> | null = null;
  let workItemTableRef: TanstackTable<WorkItem> | null = null;

  
  const handleViewSubmission = (submission: Submission) => {
    setSelectedSubmission(submission);
  };

  const handleBackToWorkbench = () => {
    setSelectedSubmission(null);
    setSelectedWorkItem(null);
  };

  const handleViewWorkItem = (workItem: WorkItem) => {
    setSelectedWorkItem(workItem);
  };
  
  const submissionColumns = getColumns(handleViewSubmission);
  const workItemColumns = getWorkItemColumns(handleViewWorkItem);

  if (selectedSubmission) {
    return (
      <main>
        <SubmissionDetails submission={selectedSubmission} onBack={handleBackToWorkbench} />
      </main>
    )
  }

  if (selectedWorkItem) {
    const submissionForWorkItem = submissions.find(s => s.id === selectedWorkItem.submissionId);
    return (
      <main>
        {submissionForWorkItem && <WorkItemDetails workItem={selectedWorkItem} submission={submissionForWorkItem} onBack={handleBackToWorkbench} />}
      </main>
    )
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Tasks") {
        onTasksClick();
    }
  }

  const onTasksClick = () => {
      setIsSheetOpen(true);
  }

  return (
      <main>
        <WorkbenchTabs onTasksClick={() => setIsSheetOpen(true)} activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'My Submissions' && (
          <DataTable
            columns={submissionColumns}
            data={submissions}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            setTable={(t) => (tableRef = t)}
          />
        )}
        {activeTab === 'Work Items' && (
           <DataTable
            columns={workItemColumns}
            data={workItems}
            rowSelection={rowSelection}
            setRowSelection={setRowSelection}
            setTable={(t) => (workItemTableRef = t)}
          />
        )}
        <AddTaskSheet isOpen={isSheetOpen} onOpenChange={setIsSheetOpen} />
      </main>
  );
}
