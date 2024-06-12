import { TableComponent } from "@/components/table/TableComponent";
import { TableLoading } from "@/components/table/TableLoading";
import { useHttpRequest } from "@/hooks/CustomHooks";

export default function Karyawan() {
  const { data: dataJabatan } = useHttpRequest("jabatan", "jabatan", "GET");
  const { data, error, isError, isPending, isFetching } = useHttpRequest(
    "karyawan",
    "karyawan",
    "GET"
  );

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
      lookup: {
        dataSource: [
          { label: "Male", value: "L" },
          { label: "Female", value: "P" },
        ],
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
        const data = dataJabatan.find((item) => item.id === getValue());
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
    </>
  );
}
