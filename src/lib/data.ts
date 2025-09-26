import { Submission } from "./types";

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
    underwriter: "John Smith",
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
    underwriter: "Jane Doe",
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
    underwriter: "Peter Jones",
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
    underwriter: "Mary Williams",
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
    underwriter: "David Brown",
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
    underwriter: "Susan Davis",
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
    underwriter: "Michael Miller",
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
    underwriter: "Jennifer Wilson",
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
    underwriter: "Robert Moore",
    status: "Declined",
    new: "Submiss...",
    producer: "Automationprodu...",
    producerInternal: "Automationprodu...",
    project: "No"
  }
];
