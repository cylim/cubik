import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { motion } from 'framer-motion';

import { Text } from '../text/text';

// @params data: TData, columns: ColumnDef<TData>[]

export const CubikTable = ({ columns, data }: { columns: any; data: any }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md w-full bg-[var(--card-bg-primary)]">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className=" px-6 border-b border-b-[var(--table-row-border)]"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th className="px-3 py-5" key={header.id}>
                  <Text
                    className={
                      'b3 text-start whitespace-nowrap overflow-hidden overflow-ellipsis'
                    }
                    color="tertiary"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Text>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <motion.tr
              layout
              layoutId={`row-${row.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`px-6 transition ease-in-out duration-300 border-b border-b-[var(--table-row-border)] ${
                row.getIsSelected()
                  ? 'bg-[var(--color-bg-cool-base)]'
                  : 'transparent'
              } 
              `}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="px-3 py-5" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
