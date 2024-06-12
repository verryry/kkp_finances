import { serviceGetKaryawanWithJabatan } from "@/services/api-karyawan";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await serviceGetKaryawanWithJabatan();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
