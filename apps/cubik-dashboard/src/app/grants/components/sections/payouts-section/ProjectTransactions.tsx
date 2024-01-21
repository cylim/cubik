'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { CubikTable, SubHead } from '@cubik/ui';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    project: 'dribble',
    contribution: 316,
    matchedAmt: 35000,
    signatureStatus: 'pending',
    treasuriesTxn: 'initate',
    subRows: [
      {
        id: '3u1reuv4',
        project: 'tinydancer',
        contribution: 242,
        matchedAmt: 24245,
        signatureStatus: 'pending',
        treasuriesTxn: 'initate',
      },
      {
        id: '3u1reuv4',
        project: 'tinydancer',
        contribution: 242,
        matchedAmt: 24245,
        signatureStatus: 'pending',
        treasuriesTxn: 'initate',
      },
      {
        id: '3u1reuv4',
        project: 'tinydancer',
        contribution: 242,
        matchedAmt: 24245,
        signatureStatus: 'pending',
        treasuriesTxn: 'initate',
      },
    ],
  },
  {
    id: '3u1reuv4',
    project: 'tinydancer',
    contribution: 242,
    matchedAmt: 24245,
    signatureStatus: 'pending',
    treasuriesTxn: 'initate',
  },
];

type Subrow = {
  id: string;
  project: string;
  contribution: number;
  matchedAmt: number;
  signatureStatus: 'pending' | 'processing' | 'success' | 'failed';
  treasuriesTxn: string;
};
export type Payment = {
  id: string;
  project: string;
  contribution: number;
  matchedAmt: number;
  signatureStatus: 'pending' | 'processing' | 'success' | 'failed';
  treasuriesTxn: string;
  subRows?: Subrow[];
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'project',
    header: 'Projects',
    cell: ({ row, getValue }) => (
      <>
        {row.getCanExpand() ? (
          <button
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: 'pointer' },
            }}
          >
            {row.getIsExpanded() ? '👇' : '👉'}
          </button>
        ) : (
          '🔵'
        )}{' '}
        {getValue()}
      </>
    ),
  },
  {
    accessorKey: 'contribution',
    header: 'Contribution',
  },
  {
    accessorKey: 'matchedAmt',
    header: 'Matched Amount',
  },
  {
    accessorKey: 'signatureStatus',
    header: 'Signature Status',
  },
  {
    accessorKey: 'treasuriesTxn',
    header: 'Treasuries Transactions',
  },
];

const ProjectTransactions = () => {
  return (
    <div>
      <div className="py-11">
        <SubHead heading="Payouts" />
      </div>
      <CubikTable data={data} columns={columns} />
    </div>
  );
};

export default ProjectTransactions;
