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
    id: "S216946",
    taskPending: "Yes",
    effectiveDate: "07/24/2025",
    expiryDate: "07/24/2026",
    insuredName: "Superman",
    underwriter: "RaviTeja Sayana",
    status: "Booked",
    new: "New",
    producer: "AutomationProdu...",
    producerInternal: "AutomationProdu...",
    project: "Yes"
  },
  {
    id: "S1117195",
    taskPending: "Yes",
    effectiveDate: "09/09/2025",
    expiryDate: "09/09/2026",
    insuredName: "joel_test_for_5_ac...",
    underwriter: "RaviTeja Sayana",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S1117136",
    taskPending: "Yes",
    effectiveDate: "09/05/2025",
    expiryDate: "09/05/2026",
    insuredName: "joel_test_account...",
    underwriter: "RaviTeja Sayana",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S1117134",
    taskPending: "No",
    effectiveDate: "09/05/2025",
    expiryDate: "09/06/2026",
    insuredName: "joel_test_account...",
    underwriter: "Srinivasulu Bodic...",
    status: "Declined",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S1117130",
    taskPending: "No",
    effectiveDate: "09/05/2025",
    expiryDate: "09/05/2026",
    insuredName: "joel_test_accoun...",
    underwriter: "RaviTeja Sayana",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S1117100",
    taskPending: "No",
    effectiveDate: "09/04/2025",
    expiryDate: "09/04/2026",
    insuredName: "joel_test_account...",
    underwriter: "Srinivasulu Bodic...",
    status: "Closed",
    new: "N",
    producer: "joel navarro",
    producerInternal: "joel_test_produce...",
    project: "No"
  },
  {
    id: "S1116273",
    taskPending: "Yes",
    effectiveDate: "07/23/2025",
    expiryDate: "07/23/2026",
    insuredName: "teststst91010",
    underwriter: "Srinivasulu Bodic...",
    status: "Under Review",
    new: "Submiss...",
    producer: "Automationprodu...",
    producerInternal: "Automationprodu...",
    project: "No"
  },
  {
    id: "S1116271",
    taskPending: "Yes",
    effectiveDate: "07/23/2025",
    expiryDate: "07/23/2026",
    insuredName: "askrealty8972",
    underwriter: "Srinivasulu Bodic...",
    status: "Under Review",
    new: "Submiss...",
    producer: "Automationprodu...",
    producerInternal: "Automationprodu...",
    project: "No"
  },
  {
    id: "S1116239",
    taskPending: "Yes",
    effectiveDate: "07/22/2025",
    expiryDate: "07/22/2026",
    insuredName: "askrealty123",
    underwriter: "Srinivasulu Bodic...",
    status: "Declined",
    new: "Submiss...",
    producer: "Automationprodu...",
    producerInternal: "Automationprodu...",
    project: "No"
  }
];
