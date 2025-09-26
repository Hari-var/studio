export type Submission = {
  id: string;
  taskPending: 'Yes' | 'No';
  effectiveDate: string;
  expiryDate: string;
  insuredName: string;
  underwriter: string;
  status: string;
  new: string;
  producer: string;
  producerInternal: string;
  project: 'Yes' | 'No';
};
