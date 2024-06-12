import { prisma } from "@/lib/db";

export const serviceGetKaryawanWithJabatan = async () => {
  const data = prisma.karyawan.findFirst({
    select: {
      nama_karyawan: true,
      jabatan: {
        select: {
          nama_jabatan: true,
          tunjangan_jabatan: true,
        },
      },
    },
  });

  return data;
};
