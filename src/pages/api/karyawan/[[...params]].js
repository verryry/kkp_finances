import {
  serviceDeleteData,
  serviceGetAllData,
  serviceGetDataByColumns,
  servicePostData,
  serviceUpdateData,
} from "@/lib/services";

export default async function handler(req, res) {
  const { param } = req.query;

  if (req.method === "GET") {
    if (param) {
      const data = await serviceGetDataByColumns(
        "karyawan",
        "id",
        parseInt(param[0])
      );

      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json({ error: "User not found" });
    }

    const data = await serviceGetAllData("karyawan");
    return res.status(200).json(data);
  }
}
