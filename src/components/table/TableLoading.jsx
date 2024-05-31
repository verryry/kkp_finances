"use client";

import { flexRender, useReactTable } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

export function TableLoading({ columns, row = 3 }) {
  const rowCount = Array(row).fill(null);
  const table = useReactTable({
    columns,
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <Skeleton className="h-8 w-24 rounded-md bg-zinc-300" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-24 rounded-md bg-zinc-300" />
          <Skeleton className="h-8 w-24 rounded-md bg-zinc-300" />
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rowCount.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((_, index) => (
                <TableCell key={index}>
                  <Skeleton className="h-4 w-24 rounded-md bg-zinc-300" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
