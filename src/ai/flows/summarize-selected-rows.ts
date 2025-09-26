'use server';

/**
 * @fileOverview AI-powered summarization of selected rows in a data table.
 *
 * - summarizeSelectedRows - A function that takes selected rows as input and returns a concise summary.
 * - SummarizeSelectedRowsInput - The input type for the summarizeSelectedRows function.
 * - SummarizeSelectedRowsOutput - The return type for the summarizeSelectedRows function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSelectedRowsInputSchema = z.object({
  rows: z
    .array(z.record(z.any()))
    .describe('An array of selected rows, where each row is a record of key-value pairs.'),
});
export type SummarizeSelectedRowsInput = z.infer<typeof SummarizeSelectedRowsInputSchema>;

const SummarizeSelectedRowsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the selected rows, highlighting key insights.'),
});
export type SummarizeSelectedRowsOutput = z.infer<typeof SummarizeSelectedRowsOutputSchema>;

export async function summarizeSelectedRows(input: SummarizeSelectedRowsInput): Promise<SummarizeSelectedRowsOutput> {
  return summarizeSelectedRowsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSelectedRowsPrompt',
  input: {schema: SummarizeSelectedRowsInputSchema},
  output: {schema: SummarizeSelectedRowsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing data table rows.

  Given the following selected rows, generate a concise summary highlighting key insights.

  Selected Rows:
  {{#each rows}}
  Row {{@index}}:
  {{#each this}}
  {{@key}}: {{this}}
  {{/each}}
  \n
  {{/each}}

  Summary:`,
});

const summarizeSelectedRowsFlow = ai.defineFlow(
  {
    name: 'summarizeSelectedRowsFlow',
    inputSchema: SummarizeSelectedRowsInputSchema,
    outputSchema: SummarizeSelectedRowsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
