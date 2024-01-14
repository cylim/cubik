'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';

import {
  Button,
  Checkbox,
  CubikTable,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@cubik/ui';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

// export const columns: ColumnDef<Payment>[] = [
//   {
//     id: 'select',
//     header: ({ table }) => (
//       <div className="w-4 border border-blue-500">
//         <Checkbox
//           checked={
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && 'indeterminate')
//           }
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//         />
//       </div>
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//     size: 10,
//   },
//   {
//     accessorKey: 'status',
//     header: 'Status',
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue('status')}</div>
//     ),
//   },
//   {
//     accessorKey: 'email',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="primary"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Email
//         </Button>
//       );
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
//   },
//   {
//     accessorKey: 'amount',
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue('amount'));

//       // Format the amount as a dollar amount
//       const formatted = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//       }).format(amount);

//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//   },
//   {
//     id: 'actions',
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original;

//       return (
//         <Menu>
//           <MenuButton>
//             <Button variant={'primary'} className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//             </Button>
//           </MenuButton>
//           <MenuList>
//             <MenuItem text="Apply For Grant" leftIcon="cube" />
//             <MenuItem text="Apply For Grant" leftIcon="cube" />
//             <MenuItem text="Apply For Grant" leftIcon="cube" />
//           </MenuList>
//         </Menu>
//       );
//     },
//   },
// ];
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 600,
    minSize: 400,
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    size: 400,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];

export function DataTableDemo() {
  return <CubikTable data={data} columns={columns} />;

  //   return (
  //     <div className="w-full">
  //       <div className="flex items-center py-4">
  //         {/* <Input
  //           placeholder="Filter emails..."
  //           value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
  //           onChange={(event) =>
  //             table.getColumn("email")?.setFilterValue(event.target.value)
  //           }
  //           className="max-w-sm"
  //         /> */}
  //         <Menu>
  //           <MenuButton>Columns</MenuButton>
  //           <MenuList align="end">
  //             {table
  //               .getAllColumns()
  //               .filter((column) => column.getCanHide())
  //               .map((column) => {
  //                 return (
  //                   <MenuItem
  //                     //     checked={column.getIsVisible()}
  //                     //    onCheckedChange={(value) =>
  //                     //   column.toggleVisibility(!!value)
  //                     // }
  //                     text="Apply For Grant"
  //                     leftIcon="cube"
  //                   />
  //                 );
  //               })}
  //           </MenuList>
  //         </Menu>
  //       </div>
  //       <div className="rounded-md border">
  //         <Table>
  //           <TableHeader>
  //             {table.getHeaderGroups().map((headerGroup) => (
  //               <TableRow key={ .id}>
  //                 {headerGroup.headers.map((header) => {
  //                   return (
  //                     <TableHead key={header.id}>
  //                       {header.isPlaceholder
  //                         ? null
  //                         : flexRender(
  //                             header.column.columnDef.header,
  //                             header.getContext(),
  //                           )}
  //                     </TableHead>
  //                   );
  //                 })}
  //               </TableRow>
  //             ))}
  //           </TableHeader>
  //           <TableBody>
  //             {table.getRowModel().rows?.length ? (
  //               table.getRowModel().rows.map((row) => (
  //                 <TableRow
  //                   key={row.id}
  //                   data-state={row.getIsSelected() && 'selected'}
  //                 >
  //                   {row.getVisibleCells().map((cell) => (
  //                     <TableCell key={cell.id}>
  //                       {flexRender(
  //                         cell.column.columnDef.cell,
  //                         cell.getContext(),
  //                       )}
  //                     </TableCell>
  //                   ))}
  //                 </TableRow>
  //               ))
  //             ) : (
  //               <TableRow>
  //                 <TableCell
  //                   colSpan={columns.length}
  //                   className="h-24 text-center"
  //                 >
  //                   No results.
  //                 </TableCell>
  //               </TableRow>
  //             )}
  //           </TableBody>
  //         </Table>
  //       </div>
  //       <div className="flex items-center justify-end space-x-2 py-4">
  //         <div className="flex-1 text-sm text-muted-foreground">
  //           {table.getFilteredSelectedRowModel().rows.length} of{' '}
  //           {table.getFilteredRowModel().rows.length} row(s) selected.
  //         </div>
  //         <div className="space-x-2">
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => table.previousPage()}
  //             disabled={!table.getCanPreviousPage()}
  //           >
  //             Previous
  //           </Button>
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => table.nextPage()}
  //             disabled={!table.getCanNextPage()}
  //           >
  //             Next
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   );
}
