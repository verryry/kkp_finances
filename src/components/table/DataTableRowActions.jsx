import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiEdit } from "react-icons/ci";

import PopupComponent from "@/components/table/PopupComponent";
import ConfirmAlert from "@/components/ui/confirm-alert";
import { useHttpRequest } from "@/hooks/CustomHooks";
import { useToggle } from "@/hooks/hooks";
import { Ellipsis, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

export default function DataTableRowActions({
  row,
  deleteApi,
  putApi,
  allowUpdating,
  allowDeleting,
  queryKey,
}) {
  const [openPopup, togglePopup] = useToggle();
  const [openConfirm, toggleConfirm] = useToggle();
  const bannerId = row.original.id;

  const { mutate: editData } = useHttpRequest(queryKey, putApi, "PUT");
  const { mutate: deleteData } = useHttpRequest(queryKey, deleteApi, "DELETE");

  const onEditedData = () => {
    togglePopup();
  };

  const onDeleteData = () => {
    toggleConfirm();
  };

  const editedData = (data) => {
    const modifyedData = { ...data, id: bannerId };

    data ? editData(modifyedData) : toast.warning("Canceling edit operation");
    togglePopup();
  };

  const deletedData = (status) => {
    status ? deleteData(bannerId) : toast.warning("Canceling delete operation");
    toggleConfirm();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <Ellipsis className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          {allowUpdating && (
            <DropdownMenuItem onClick={onEditedData}>
              <CiEdit size={15} className="mr-2" /> Edit Data
            </DropdownMenuItem>
          )}

          <DropdownMenuSeparator />
          {allowDeleting && (
            <DropdownMenuItem className="text-red-500" onClick={onDeleteData}>
              <Trash2Icon size={15} className="mr-2" /> Delete
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {openConfirm && (
        <ConfirmAlert
          open={openConfirm}
          onOpenChange={toggleConfirm}
          callback={deletedData}
        />
      )}
      {openPopup && (
        <PopupComponent
          open={openPopup}
          onOpenChange={togglePopup}
          data={row.original}
          dataCallback={editedData}
        />
      )}
    </>
  );
}
