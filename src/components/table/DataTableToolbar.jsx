import { DebouncedInput } from "@/components/ui/debounced-input";
import { camelCase } from "@/lib/helper";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";

export default function DataTableToolbar({
  table,
  searchBy,
  filterBy,
  leftToolbars,
}) {
  return (
    <div className="flex items-center space-x-2">
      {searchBy ? (
        <DebouncedInput
          placeholder={`Search by ${camelCase(searchBy)}`}
          value={table.getColumn(searchBy)?.getFilterValue() ?? ""}
          onChange={(value) => table.getColumn(searchBy)?.setFilterValue(value)}
          className="h-8 w-48 max-w-sm"
        />
      ) : (
        <div></div>
      )}
      {filterBy?.map((filter) => {
        if (table.getColumn(filter.column)) {
          return (
            <DataTableFacetedFilter
              key={filter.column}
              column={table.getColumn(filter.column)}
              title={filter.title}
              options={filter.options}
            />
          );
        }
        return null;
      })}

      {leftToolbars}
    </div>
  );
}
