import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderSnippet } from "$lib/components/ui/data-table/index.js";
 
export const columns: ColumnDef<Payment>[] = [
 {
  accessorKey: "amount",
  header: () => {
   const amountHeaderSnippet = createRawSnippet(() => ({
    render: () => `<div class="text-right">Amount</div>`,
   }));
   return renderSnippet(amountHeaderSnippet, "");
  },
  cell: ({ row }) => {
   const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
   });
 
   const amountCellSnippet = createRawSnippet<[string]>((getAmount) => {
    const amount = getAmount();
    return {
     render: () => `<div class="text-right font-medium">${amount}</div>`,
    };
   });
 
   return renderSnippet(
    amountCellSnippet,
    formatter.format(parseFloat(row.getValue("amount")))
   );
  },
 },
];