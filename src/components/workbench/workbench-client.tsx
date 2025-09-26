"use client";

import * as React from "react";
import Image from "next/image";
import { Row, Table as TanstackTable } from "@tanstack/react-table";
import { BrainCircuit, Loader2, User } from "lucide-react";

import { submissions as defaultSubmissions } from "@/lib/data";
import { Submission } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/workbench/data-table";
import { columns } from "@/components/workbench/columns";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { summarizeSelectedRows } from "@/ai/flows/summarize-selected-rows";
import { Skeleton } from "../ui/skeleton";

const userAvatar = PlaceHolderImages.find((img) => img.id === "user-avatar");

export function WorkbenchClient() {
  const [submissions] = React.useState<Submission[]>(defaultSubmissions);
  const [rowSelection, setRowSelection] = React.useState({});
  const [isSummaryDialogOpen, setIsSummaryDialogOpen] = React.useState(false);
  const [summary, setSummary] = React.useState("");
  const [isSummarizing, setIsSummarizing] = React.useState(false);

  const { toast } = useToast();
  let tableRef: TanstackTable<Submission> | null = null;

  const handleSummarize = async () => {
    if (!tableRef) return;
    
    const selectedRowsData = tableRef
      .getFilteredSelectedRowModel()
      .rows.map((row: Row<Submission>) => row.original);

    if (selectedRowsData.length === 0) {
      toast({
        title: "No rows selected",
        description: "Please select one or more rows to summarize.",
        variant: "destructive",
      });
      return;
    }

    setIsSummaryDialogOpen(true);
    setIsSummarizing(true);
    setSummary("");

    try {
      const result = await summarizeSelectedRows({ rows: selectedRowsData });
      setSummary(result.summary);
    } catch (error) {
      console.error("Error summarizing rows:", error);
      toast({
        title: "Summarization Failed",
        description: "Could not generate a summary. Please try again.",
        variant: "destructive",
      });
      setIsSummaryDialogOpen(false);
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">UW Workbench</h1>
        <div className="flex items-center gap-4">
          <Button
            onClick={handleSummarize}
            disabled={Object.keys(rowSelection).length === 0}
          >
            <BrainCircuit className="mr-2 h-4 w-4" />
            Summarize
          </Button>
          <Avatar>
            {userAvatar && (
              <AvatarImage
                src={userAvatar.imageUrl}
                alt={userAvatar.description}
                data-ai-hint={userAvatar.imageHint}
              />
            )}
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main>
        <DataTable
          columns={columns}
          data={submissions}
          rowSelection={rowSelection}
          setRowSelection={setRowSelection}
          setTable={(t) => (tableRef = t)}
        />
      </main>

      <Dialog open={isSummaryDialogOpen} onOpenChange={setIsSummaryDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              AI-Powered Summary
            </DialogTitle>
            <DialogDescription>
              A concise summary of the selected submissions, highlighting key insights.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isSummarizing ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="text-sm text-foreground">{summary}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
