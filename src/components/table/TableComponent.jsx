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
      width                             // table width
      allowMultipleSelect               // enable multiple select
    /> 
 */

"use client";

import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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

const getCommonPinningStyles = (column, type) => {
  const pinStatus = column.getIsPinned();
  const baseStyle = "sticky top-0 z-10 shadow-2xl";
  const positionStyle =
    pinStatus === "left" ? "left-0" : pinStatus === "right" ? "right-0" : "";
  const colorStyle =
    type === "header" ? "bg-blue-800 dark:bg-black" : "bg-white dark:bg-black";

  return pinStatus ? `${baseStyle} ${positionStyle} ${colorStyle}` : "";
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
      {row.getVisibleCells().map((cell) => {
        const pinClassname = getCommonPinningStyles(cell.column, "body");

        return (
          <TableCell key={cell.id} className={pinClassname}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

// Table Component
export function TableComponent({
  columns: columnsProp,
  data: dataProp,
  keyField = "id",
  searchBy,
  pagination,
  paginationOptions = [10, 20, 30],
  onPaginationChange,
  rowCount,
  ssrPagination = false,
  visibleColumns,
  rowDragnDrop,
  allowMultipleSelect,
  filterBy = [],
  leftToolbars,
  rightToolbars,
  height = "h-[62vh]",
  width = "w-[82vw]",
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
            className="!bg-white !text-blue-600 dark:!bg-transparent "
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

  const commonProperties = {
    data,
    columns,
    getRowId: (row) => row.id,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  };

  const reactTableCsrConfig = {
    ...commonProperties,
    enableRowSelection: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  };

  const reactTableSsrConfig = {
    ...commonProperties,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    manualPagination: true,
    pagination,
    onPaginationChange,
    rowCount,
  };

  const table = useReactTable(
    ssrPagination ? reactTableSsrConfig : reactTableCsrConfig,
  );

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

  const dataIds = useMemo(
    () => data?.map((item) => item[keyField]),
    [data, keyField],
  );

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
            leftToolbars={leftToolbars}
          />
          <div className="flex gap-2">
            {visibleColumns && <DataTableViewOptions table={table} />}
            {rightToolbars}
          </div>
        </div>
        <div className="rounded-md border">
          <Table scrollClassname={`${height} ${width} `}>
            {/* <Table scrollClassname="h-[70vh] w-[82vw] whitespace-nowrap"> */}
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const pinClassname = getCommonPinningStyles(
                      header.column,
                      "header",
                    );
                    return (
                      <TableHead
                        key={header.id}
                        className={pinClassname}
                        colSpan={header.colSpan}
                      >
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
