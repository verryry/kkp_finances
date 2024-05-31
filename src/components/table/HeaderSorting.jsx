import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsUpDownIcon,
  EyeOffIcon,
} from "lucide-react";

import { TiPinOutline } from "react-icons/ti";
import { RiUnpinLine } from "react-icons/ri";

export function HeaderSorting({ column, title, className }) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }
  const isPinned = column.getIsPinned();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            // variant="ghost"
            size="sm"
            className="-ml-3 h-8 bg-transparent text-current data-[state=open]:bg-transparent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ChevronUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ChevronUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ChevronDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOffIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          {isPinned !== "left" && (
            <DropdownMenuItem onClick={() => column.pin("left")}>
              <TiPinOutline className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Pin to Left
            </DropdownMenuItem>
          )}
          {isPinned !== "right" && (
            <DropdownMenuItem onClick={() => column.pin("right")}>
              <TiPinOutline className="mr-2 h-3.5 w-3.5 scale-x-[-1] text-muted-foreground/70" />
              Pin to Right
            </DropdownMenuItem>
          )}
          {isPinned && (
            <DropdownMenuItem onClick={() => column.pin(false)}>
              <RiUnpinLine className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Unpin
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
