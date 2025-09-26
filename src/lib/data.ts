import { Submission, Task, WorkItem } from "./types";

function subtractDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

const today = new Date();

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0].replace(/-/g, '/');
}

export const submissions: Submission[] = [
  {
    id: "S345821",
    taskPending: "Yes",
    effectiveDate: "07/24/2025",
    expiryDate: "07/24/2026",
    insuredName: "Giga Structures",
    underwriter: "Bruce Wayne",
    status: "Booked",
    new: "New",
    producer: "AutomationProdu...",
    producerInternal: "AutomationProdu...",
    project: "Yes"
  },
  {
    id: "S489234",
    taskPending: "Yes",
    effectiveDate: "09/09/2025",
    expiryDate: "09/09/2026",
    insuredName: "Quantum Innovations",
    underwriter: "Diana Prince",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S512345",
    taskPending: "Yes",
    effectiveDate: "09/05/2025",
    expiryDate: "09/05/2026",
    insuredName: "Pioneer Logistics",
    underwriter: "Clark Kent",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S678901",
    taskPending: "No",
    effectiveDate: "09/05/2025",
    expiryDate: "09/06/2026",
    insuredName: "Apex Construction",
    underwriter: "Barry Allen",
    status: "Declined",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S789012",
    taskPending: "No",
    effectiveDate: "09/05/2025",
    expiryDate: "09/05/2026",
    insuredName: "Blue-sky Enterprises",
    underwriter: "Hal Jordan",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S890123",
    taskPending: "No",
    effectiveDate: "09/04/2025",
    expiryDate: "09/04/2026",
    insuredName: "Starlight Solutions",
    underwriter: "Arthur Curry",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S901234",
    taskPending: "Yes",
    effectiveDate: "07/23/2025",
    expiryDate: "07/23/2026",
    insuredName: "Silverline Corp",
    underwriter: "Victor Stone",
    status: "Under Review",
    new: "Submiss...",
    producer: "Automationprodu...",
    producerInternal: "Automationprodu...",
    project: "No"
  },
  {
    id: "S123456",
    taskPending: "Yes",
    effectiveDate: "07/23/2025",
    expiryDate: "07/23/2026",
    insuredName: "Vertex Holdings",
    underwriter: "J'onn J'onzz",
    status: "Under Review",
    new: "Submiss...",
    producer: "Automationprodu...",
    producerInternal: "Automationprodu...",
    project: "No"
  },
  {
    id: "S234567",
    taskPending: "Yes",
    effectiveDate: "07/22/2025",
    expiryDate: "07/22/2026",
    insuredName: "Momentum Inc",
    underwriter: "Oliver Queen",
    status: "Declined",
    new: "Submiss...",
    producer: "Automationprodu...",
    producerInternal: "Automationprodu...",
    project: "No"
  }
];

export const tasks: Task[] = [
    { id: "T1", submissionId: "S345821", taskType: "Review", note: "Review new submission documents", createdDate: "07/20/2025", dueDate: "07/25/2025", status: "To Do", tags: "red", assignTo: "John Smith", priority: "High" },
    { id: "T2", submissionId: "S345821", taskType: "Follow-up", note: "Follow-up with producer for missing info", createdDate: "07/26/2025", dueDate: "07/30/2025", status: "To Do", tags: "blue", assignTo: "John Smith", priority: "Medium" },
    { id: "T3", submissionId: "S489234", taskType: "Analyze", note: "Analyze renewal documents", createdDate: "09/01/2025", dueDate: "09/05/2025", status: "Done", tags: "green", assignTo: "Jane Doe", priority: "Medium" },
    { id: "T4", submissionId: "S512345", taskType: "Data Entry", note: "Enter data for new logistics client", createdDate: "09/01/2025", dueDate: "09/03/2025", status: "Done", tags: "", assignTo: "Peter Jones", priority: "Low" },
    { id: "T5", submissionId: "S901234", taskType: "Quote", note: "Prepare quote for Silverline Corp", createdDate: "07/24/2025", dueDate: "07/28/2025", status: "To Do", tags: "orange", assignTo: "Michael Miller", priority: "High" },
    { id: "T6", submissionId: "S123456", taskType: "Quote", note: "Quote for Vertex Holdings", createdDate: "07/24/2025", dueDate: "07/29/2025", status: "To Do", tags: "", assignTo: "Jennifer Wilson", priority: "Medium" },
    { id: "T7", submissionId: "S234567", taskType: "Decline", note: "Send decline letter", createdDate: "07/23/2025", dueDate: "07/24/2025", status: "Done", tags: "", assignTo: "Robert Moore", priority: "Medium" },
    { id: "T8", submissionId: "S345821", taskType: "Bind", note: "Bind the policy", createdDate: "08/01/2025", dueDate: "08/05/2025", status: "To Do", tags: "purple", assignTo: "John Smith", priority: "High" },
];

export const workItems: WorkItem[] = [
    { id: "W5350", owner: "Natasha Romanoff", type: "New Submission", priority: "Medium", gwpcStatus: "Declined", status: "WIP", indicated: false, automationStatus: "Not Applicable", exposureStatus: "New", submissionId: "S345821" },
    { id: "W5351", owner: "Peter Parker", type: "Renewal", priority: "High", gwpcStatus: "Approved", status: "Done", indicated: true, automationStatus: "Complete", exposureStatus: "Renewed", submissionId: "S489234" },
    { id: "W5352", owner: "Tony Stark", type: "Endorsement", priority: "Low", gwpcStatus: "Pending", status: "To Do", indicated: false, automationStatus: "In Progress", exposureStatus: "Endorsed", submissionId: "S512345" },
    { id: "W5353", owner: "Steve Rogers", type: "New Submission", priority: "Medium", gwpcStatus: "Declined", status: "WIP", indicated: true, automationStatus: "Not Applicable", exposureStatus: "New", submissionId: "S678901" },
];
