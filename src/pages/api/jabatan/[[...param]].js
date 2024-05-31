import {
  serviceDeleteData,
  serviceGetAllData,
  serviceGetDataByColumns,
  servicePostData,
} from "@/lib/services";

export default async function handler(req, res) {
  const { param } = req.query;

  if (req.method === "POST") {
    try {
      const body = await req.body;

      const newUser = servicePostData("jabatan", body);

      return res.status(200).json({ message: "User created", data: body });
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "GET") {
    if (param) {
      const data = await serviceGetDataByColumns(
        "jabatan",
        "id",
        parseInt(param[0])
      );

      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json({ error: "User not found" });
    }

    const data = await serviceGetAllData("jabatan");
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    if (param) {
      const data = await serviceGetDataByColumns(
        "jabatan",
        "id",
        parseInt(param[0])
      );

      if (data) {
        const data = await serviceDeleteData(
          "jabatan",
          "id",
          parseInt(param[0])
        );
        return res.status(200).json(data);
      }
      return res.status(404).json({ error: "Jabatan not found" });
    }
  }
}
