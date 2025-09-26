export type Submission = {
  id: string;
  insuredName: string;
  lob: 'General Liability' | 'Commercial Auto' | 'Workers Compensation' | 'Commercial Property';
  state: string;
  premium: number;
  dueDate: string;
  underwriter: string;
  status: 'New' | 'Quoted' | 'Bound' | 'Declined' | 'Overdue';
};
