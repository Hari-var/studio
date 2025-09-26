import { WorkbenchHeader } from "@/components/workbench/workbench-header";
import { WorkbenchTabs } from "@/components/workbench/workbench-tabs";
import { WorkbenchClient } from "@/components/workbench/workbench-client";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WorkbenchHeader />
      <div className="container mx-auto p-4 md:p-8">
        <WorkbenchTabs />
        <WorkbenchClient />
      </div>
    </div>
  );
}
