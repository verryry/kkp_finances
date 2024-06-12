import { serviceGetJabatan } from "@/services/api-jabatan";
import { useQuery } from "@tanstack/react-query";

export const useGetJabatan = () => {
  return useQuery({
    queryKey: ["jabatan"],
    queryFn: () => serviceGetJabatan(),
    refetchOnWindowFocus: false,
  });
};
