import PopupModalJabatan from "@/components/popup/jabatan/PopupModalJabatan";
import { TableComponent } from "@/components/table/TableComponent";
import { TableLoading } from "@/components/table/TableLoading";
import { Button } from "@/components/ui/button";
import { useGetJabatan } from "@/hooks/JabatanHooks";
import { useToggle } from "@/hooks/hooks";
import { serviceGetAllData } from "@/lib/services";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const columns = [
  {
    header: "Jabatan",
    accessorKey: "nama_jabatan",
  },
  {
    header: "Tunjangan",
    accessorKey: "tunjangan_jabatan",
  },
];

const ToolbarComponent = ({ openPopup }) => {
  return (
    <Button
      size="sm"
      className="ml-auto hidden h-8 lg:flex"
      onClick={openPopup}
    >
      <PlusIcon size={20} /> Add New
    </Button>
  );
};

export default function Jabatan() {
  const [openJabatan, toggleJabatan] = useToggle();
  const { data, error, isError, isPending, isFetching } = useGetJabatan();
  const [messageConfirm, setMessageConfirm] = useState({
    title: "",
    description: "",
    data: "",
  });
  const [openConfirmAlert, setOpenConfirmAlert] = useState(false);

  if (isError) {
    console.log(error);
    return toast.error(`An error has occurred ${error}`);
  }

  const handlePopup = (type, confirm = false, cancel = false) => {
    const toggleMap = {
      jabatan: toggleJabatan,
    };

    const messageMap = {
      jabatan: "postJabatan",
    };

    toggleMap[type]();
    setMessageConfirm({
      type: messageMap[type],
    });

    if (confirm) setOpenConfirmAlert(true);
    if (cancel) toast.warning(`Cancelling Form`);
  };

  const handleData = (data) => {};

  const renderPopup = () => {
    if (openJabatan) {
      return (
        <PopupModalJabatan
          open={openJabatan}
          onOpenChange={() => handlePopup("jabatan", true)}
          cancelCallback={() => handlePopup("jabatan", false, true)}
          callback={(data) => handleData(data)}
        />
      );
    }
  };

  return (
    <div>
      {isPending || isFetching ? (
        <TableLoading columns={columns} row={3} />
      ) : (
        <TableComponent
          columns={columns}
          data={data}
          searchBy={"nama_jabatan"}
          pagination
          visibleColumns
          rightToolbars={
            <ToolbarComponent openPopup={() => handlePopup("jabatan")} />
          }
          height={"h-[63vh]"}
          width={"w-[96vw]"}
        />
      )}
      {renderPopup()}
    </div>
  );
}
