"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import * as React from "react";

interface WorkbenchTabsProps {
    onTasksClick: () => void;
}

export function WorkbenchTabs({ onTasksClick }: WorkbenchTabsProps) {
  const [activeTab, setActiveTab] = React.useState("My Submissions");
  const tabs = ["My Submissions", "Tasks", "Subjectivities", "All Submissions"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Tasks") {
        onTasksClick();
    }
  }

  return (
    <div className="flex items-center border-b">
        <Button variant="ghost" size="icon">
            <Filter className="h-5 w-5 text-orange-600" />
        </Button>
        <Button variant="ghost" size="icon" className="text-orange-600 text-lg -ml-2">
            x
        </Button>
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`py-2 px-1 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
            {tab === "My Submissions" && (
              <Badge variant="destructive" className="ml-2 bg-orange-500 text-white">9</Badge>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
