import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function EditableCell({ getValue, row, column, table }) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false); // Use a more descriptive name

  const columnMeta = column.columnDef.meta;
  const columnType = column.columnDef.meta?.type;
  const readOnly = column.columnDef.meta?.readOnly;
  const tableMeta = table.options.meta;
  const options = columnMeta?.options; // Destructure for clarity

  const onBlur = () => {
    tableMeta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleSelect = (currentValue) => {
    setValue(currentValue === value ? "" : currentValue);
    setIsOpen(false);
  };

  const getOptionLabel = (option) => option?.label; // Function for consistent label retrieval

  const renderContent = () => {
    switch (columnType) {
      case "select":
        return (
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={isOpen}
                className="w-[200px] justify-between"
                onBlur={onBlur}
                disabled={readOnly}
              >
                {value
                  ? getOptionLabel(
                      options?.find((option) => option.value === value),
                    )
                  : "Select..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <CommandEmpty>No stock found.</CommandEmpty>
                  <CommandGroup>
                    {options?.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={() => handleSelect(option.value)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === option.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {getOptionLabel(option)}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        );
      case "date":
        return (
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !value && "text-muted-foreground",
                )}
                onBlur={onBlur}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? format(value, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={value}
                onSelect={setValue}
                onDayBlur={onBlur}
                initialFocus
                readOnly={readOnly}
              />
            </PopoverContent>
          </Popover>
        );
      default:
        return (
          <Input
            value={value}
            onBlur={onBlur}
            onChange={(e) => setValue(e.target.value)}
            className="w-30 "
            type={columnType || "text"}
            disabled={readOnly}
          />
        );
    }
  };

  return renderContent();
}
