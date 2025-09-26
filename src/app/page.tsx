import { WorkbenchClient } from "@/components/workbench/workbench-client";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-4 md:p-8">
        <WorkbenchClient />
      </div>
    </div>
  );
}
