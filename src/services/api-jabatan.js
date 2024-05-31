import { httpRequest } from "@/lib/httpRequest";

export const serviceGetJabatan = async () => {
  const response = await httpRequest(
    process.env.NEXT_PUBLIC_API_DEFAULT,
    "jabatan",
    "GET"
  );
  return response;
};
