import PopupModalJabatan from "@/components/popup/jabatan/PopupModalJabatan";
import { TableComponent } from "@/components/table/TableComponent";
import { TableLoading } from "@/components/table/TableLoading";
import { useHttpRequest } from "@/hooks/CustomHooks";
import { useToggle } from "@/hooks/hooks";
import { formatDate } from "@/lib/helper";
import { toast } from "sonner";

const columns = [
  {
    header: "Jabatan",
    accessorKey: "nama_jabatan",
    required: true,
    type: "string",
  },
  {
    header: "Tunjangan",
    accessorKey: "tunjangan_jabatan",
    type: "number",
  },
  {
    header: "Date",
    accessorKey: "date",
    cell: ({ getValue }) => <div className="">{formatDate(getValue())}</div>,
    type: "date",
  },
  {
    header: "Divisi",
    accessorKey: "division",
    type: "select",
    lookup: {
      dataSource: [
        { label: "IT", value: "IT" },
        { label: "HRD", value: "HRD" },
        { label: "Finance", value: "Finance" },
      ],
      displayExpr: "label",
      valueExpr: "value",
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    type: "boolean",
  },
];

export default function Jabatan() {
  const [openJabatan, toggleJabatan] = useToggle();
  const { data, error, isError, isPending, isFetching } = useHttpRequest(
    "jabatan",
    "jabatan",
    "GET"
  );

  if (isError) {
    console.log(error);
    return toast.error(`An error has occurred ${error}`);
  }

  const renderPopup = () => {
    if (openJabatan) {
      return (
        <PopupModalJabatan
          open={openJabatan}
          onOpenChange={toggleJabatan}
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
          // Service
          dataSource={data}
          allowAdding
          allowUpdating
          allowDeleting
          postApi={"jabatan"}
          putApi={"jabatan"}
          deleteApi={"jabatan"}
          queryKey={"jabatan"}
          // Column Config
          columnsConfiguration={columns}
          //Fitur
          searchBy={"nama_jabatan"}
          pagination
          visibleColumns
          height={"h-[63vh]"}
          width={"w-[96vw]"}
        />
      )}
      {renderPopup()}
    </div>
  );
}
