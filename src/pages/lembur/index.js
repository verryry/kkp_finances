import { useHttpRequest } from "@/hooks/CustomHooks";
import React from "react";
import { TableComponent } from "@/components/table/TableComponent";
import { TableLoading } from "@/components/table/TableLoading";
import { useToggle } from "@/hooks/hooks";
import { formatDate } from "@/lib/helper";
import { toast } from "sonner";

export default function Lembur() {
  const { data: dataKaryawan } = useHttpRequest("karyawan", "karyawan", "GET");
  const { data, error, isError, isPending, isFetching } = useHttpRequest(
    "lembur",
    "lembur",
    "GET"
  );

  const columns = [
    {
      header: "Karyawan",
      accessorKey: "id_karyawan",
      cell: ({ getValue }) => {
        const data = dataKaryawan?.find((item) => item.id === getValue());
        return <div className="">{data?.nama_karyawan}</div>;
      },
      type: "select",
      lookup: {
        dataSource: dataKaryawan,
        displayExpr: "nama_karyawan",
        valueExpr: "id",
      },
    },
    {
      header: "Bulan",
      accessorKey: "bulan",
      required: true,
      type: "string",
    },
  ];

  return (
    <>
      {isPending || isFetching ? (
        <TableLoading columns={columns} row={3} />
      ) : (
        <TableComponent
          // Service
          dataSource={data}
          allowAdding
          allowUpdating
          allowDeleting
          postApi={"lembur"}
          putApi={"lembur"}
          deleteApi={"lembur"}
          queryKey={"lembur"}
          // Column Config
          columnsConfiguration={columns}
          //Fitur
          pagination
          visibleColumns
          height={"h-[63vh]"}
          width={"w-[96vw]"}
        />
      )}
    </>
  );
}
