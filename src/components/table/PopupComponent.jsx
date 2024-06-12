import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

export default function PopupComponent({
  open,
  onOpenChange,
  data = {},
  dataCallback,
}) {
  const columns = useAppStore((state) => state.columns);
  const formSchema = z.object({
    ...(columns?.length > 0
      ? Object.fromEntries(
          columns?.map((column) => [
            column.accessorKey,
            column.required
              ? getSchemaForRequiredColumn(column)
              : getSchemaForOptionalColumn(column),
          ])
        )
      : {}),
  });

  function getSchemaForRequiredColumn(column) {
    switch (column.type) {
      case "string":
        return z.coerce
          .string()
          .min(1, { message: `${column.header} is required` });
      case "number":
        return z.coerce.number({
          required_error: `${column.header} is required`,
          invalid_type_error: `${column.header} must be a number`,
        });
      case "boolean":
        return z.coerce.boolean({
          required_error: `${column.header} is required`,
          invalid_type_error: `${column.header} must be a boolean`,
        });
      case "date":
        return z.coerce.date({
          required_error: "Please select a date and time",
          invalid_type_error: "That's not a date!",
        });
      case "select":
        return z.coerce
          .string()
          .min(1, { message: `${column.header} is required` });
      default:
        return z.coerce
          .string()
          .min(1, { message: `${column.header} is required` });
    }
  }

  function getSchemaForOptionalColumn(column) {
    switch (column.type) {
      case "string":
        return z.coerce.string().optional();
      case "number":
        return z.coerce
          .number({
            invalid_type_error: `${column.header} must be a number`,
          })
          .optional();
      case "boolean":
        return z.coerce
          .boolean({
            invalid_type_error: `${column.header} must be a boolean`,
          })
          .optional();
      case "date":
        return z.coerce.date({ message: "Invalid date string!" }).optional();
      case "select":
        return z.coerce.string().optional();
      default:
        return z.coerce.string().optional();
    }
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...columns?.reduce((acc, column) => {
        switch (column.type) {
          case "string":
            acc[column.accessorKey] = data[column.accessorKey] || "";
            break;
          case "number":
            acc[column.accessorKey] = data[column.accessorKey] || 0;
            break;
          case "boolean":
            acc[column.accessorKey] = data[column.accessorKey] || false;
            break;
          case "date":
            acc[column.accessorKey] = data[column.accessorKey] || new Date();
            break;
          default:
            acc[column.accessorKey] = data[column.accessorKey] || "";
        }
        return acc;
      }, {}),
    },
  });

  const onSubmit = (data) => {
    dataCallback(data);
    onOpenChange();
  };

  const renderFormItem = (field, column) => {
    switch (column.type) {
      case "string":
        return (
          <FormItem>
            <FormLabel>{column.header}</FormLabel>
            <FormControl>
              <Input
                placeholder={`Input ${column.header}`}
                type={column.type === "number" ? "number" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      case "number":
        return (
          <FormItem>
            <FormLabel>{column.header}</FormLabel>
            <FormControl>
              <Input
                placeholder={`Input ${column.header}`}
                type={column.type === "number" ? "number" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      case "boolean":
        return (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md ">
            <FormLabel>{column.header}</FormLabel>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      case "date":
        return (
          <FormItem className="flex flex-col">
            <FormLabel>{column.header}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      case "select":
        return (
          <FormItem>
            <FormLabel>{column.header}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {column.lookup?.dataSource.map(
                  (option) => (
                    console.log(option),
                    (
                      <SelectItem
                        key={option.value}
                        value={option[column.lookup?.valueExpr]}
                      >
                        {option[column.lookup?.displayExpr]}
                      </SelectItem>
                    )
                  )
                )}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Form Data</DialogTitle>
          <DialogDescription>
            Make changes to your data here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {columns?.map((column, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={column.accessorKey}
                  render={({ field }) => renderFormItem(field, column)}
                />
              ))}
            </div>
            <DialogFooter className="sm:justify-start">
              <Button type="submit" variant="default">
                Save changes
              </Button>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
