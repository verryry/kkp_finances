/**
    <TableComponent 
      columns={columns}                 // table columns
      data={data}                       // table data
      pagination                        // enable pagination
      paginationOptions = [5,10,20]     // table pagination options default [10, 20, 30]
      rowDragnDrop                      // enable row drag and drop (data must be have id)
      visibleColumns                    // enable visible columns
      searchBy="email"                  // search by column
      filterBy = [                      // filter by column
        { 
          column: columnName,           // column name
          title: columnTitle,           // column title
          options: columnOptions        // column options
        }
      ]  
      toolbars                          // enable toolbars       
      height                            // table height     
    /> 
 */

"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  useReactTable,
} from "@tanstack/react-table";

import { DataTablePagination } from "@/components/table/DataTablePagination";
import { DataTableViewOptions } from "@/components/table/DataTableViewOptions";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVerticalIcon } from "lucide-react";
import { useId, useMemo, useState } from "react";
import DataTableToolbar from "./DataTableToolbar";

// Cell Component
const RowDragHandleCell = ({ rowId }) => {
  const { attributes, listeners } = useSortable({
    id: rowId,
  });
  return (
    // Alternatively, you could set these attributes on the rows themselves
    <button {...attributes} {...listeners}>
      <GripVerticalIcon size={20} />
    </button>
  );
};

// Row Component
const DraggableRow = ({ row }) => {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform), //let dnd-kit do its thing
    transition: transition,
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 1 : 0,
    position: "relative",
  };

  return (
    <TableRow
      key={row.id}
      ref={setNodeRef}
      data-state={row.getIsSelected() && "selected"}
      style={style}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};

// Table Component
export function TableComponentSample({
  columns: columnsProp,
  data: dataProp,
  searchBy,
  pagination,
  paginationOptions = [10, 20, 30],
  visibleColumns,
  rowDragnDrop,
  allowMultipleSelect,
  filterBy = [],
  toolbars,
  height,
  onDataUpdate, // Added parameter for callback after data update
}) {
  const randomId = useId();
  const useCreateColumns = (columnsProp, rowDragnDrop, allowMultipleSelect) =>
    useMemo(() => {
      const baseColumns = [
        {
          header: "No.",
          id: "no",
          cell: ({ row }) => row.index + 1,
        },
        ...columnsProp,
      ];

      const selectColumn = {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="!bg-white !text-blue-600 "
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      };

      const dragHandleColumn = {
        id: "drag-handle",
        header: "Move",
        cell: ({ row }) => <RowDragHandleCell rowId={row.id} />,
        size: 60,
      };

      // Menentukan kolom berdasarkan kondisi
      const conditionalColumns = [
        ...(allowMultipleSelect ? [selectColumn] : []),
        ...baseColumns,
        ...(rowDragnDrop ? [dragHandleColumn] : []),
      ];

      return conditionalColumns;
    }, [columnsProp, rowDragnDrop, allowMultipleSelect]);

  const columns = useCreateColumns(
    columnsProp,
    rowDragnDrop,
    allowMultipleSelect,
  );

  const [data, setData] = useState(dataProp);
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) => {
          const updatedData = old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...row,
                [columnId]: value,
              };
            }
            return row;
          });
          onDataUpdate?.(updatedData); // Invoke callback with the entire updated data array
          return updatedData;
        });
      },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex); //this is just a splice util
      });
    }
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  );

  const dataIds = useMemo(() => data?.map(({ id }) => id), [data]);
  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      id={randomId}
    >
      <div className="w-full">
        <div className="flex items-center justify-between py-4">
          <DataTableToolbar
            table={table}
            searchBy={searchBy}
            filterBy={filterBy}
          />
          <div className="flex gap-2">
            {visibleColumns && <DataTableViewOptions table={table} />}
            {toolbars}
          </div>
        </div>
        <div className="rounded-md border">
          <Table scrollClassname={height || "h-[70vh]"}>
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
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <SortableContext
                    key={row.id}
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    <DraggableRow key={row.id} row={row} />
                  </SortableContext>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          {pagination && (
            <DataTablePagination
              table={table}
              paginationOptions={paginationOptions}
            />
          )}
        </div>
      </div>
    </DndContext>
  );
}
