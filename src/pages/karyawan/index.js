import { TableComponent } from "@/components/table/TableComponent";
import { TableLoading } from "@/components/table/TableLoading";
import { useHttpRequest } from "@/hooks/CustomHooks";
import { formatDate, formatNumberComma } from "@/lib/helper";
import { serviceGetJabatan } from "@/services/api-jabatan";
import { useEffect, useMemo } from "react";

const gender = [
  { label: "Male", value: "L" },
  { label: "Female", value: "P" },
];

export default function Karyawan() {
  const { data, isPending, isFetching } = useHttpRequest(
    "karyawan",
    "karyawan",
    "GET"
  );
  const { data: dataJabatan } = useHttpRequest("jabatan", "jabatan", "GET");

  const columns = [
    {
      header: "Nama",
      accessorKey: "nama_karyawan",
      required: true,
      type: "string",
    },
    {
      header: "Gender",
      accessorKey: "jenis_kelamin",
      type: "select",
      cell: ({ getValue }) => {
        const data = gender?.find((item) => item.value === getValue());
        return data?.label;
      },
      lookup: {
        dataSource: gender,
        displayExpr: "label",
        valueExpr: "value",
      },
    },
    {
      header: "Alamat",
      accessorKey: "alamat",
      type: "string",
    },
    {
      header: "Agama",
      accessorKey: "agama",
      type: "string",
    },
    {
      header: "Email",
      accessorKey: "email",
      type: "string",
    },
    {
      header: "No. Telp",
      accessorKey: "no_telp",
      type: "number",
    },
    {
      header: "Divisi",
      accessorKey: "department",
      type: "string",
    },
    {
      header: "Jabatan",
      accessorKey: "id_jabatan",
      cell: ({ getValue }) => {
        const data = dataJabatan?.find((item) => item.id === getValue());
        return <div className="">{data?.nama_jabatan}</div>;
      },
      type: "select",
      lookup: {
        dataSource: dataJabatan,
        displayExpr: "nama_jabatan",
        valueExpr: "id",
      },
    },
    {
      header: "Gaji Pokok",
      accessorKey: "gaji_pokok",
      type: "number",
      cell: ({ getValue }) => (
        <div className="">{formatNumberComma(getValue())}</div>
      ),
    },
    {
      header: "Tgl. Lahir",
      accessorKey: "tgl_lahir",
      type: "date",
      cell: ({ getValue }) => <div className="">{formatDate(getValue())}</div>,
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
          postApi={"karyawan"}
          putApi={"karyawan"}
          deleteApi={"karyawan"}
          queryKey={"karyawan"}
          // Column Config
          columnsConfiguration={columns}
          //Fitur
          searchBy={"nama_karyawan"}
          pagination
          visibleColumns
          height={"h-[63vh]"}
          width={"w-[96vw]"}
        />
      )}
    </>
  );
}
