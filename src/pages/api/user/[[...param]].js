import { hash } from "bcrypt";
import {
  serviceDeleteData,
  serviceGetAllData,
  serviceGetDataByColumns,
  serviceGetDataById,
  servicePostData,
} from "@/lib/services";

export default async function handler(req, res) {
  const { param } = req.query;
  if (req.method === "POST") {
    try {
      const body = await req.body;
      const { email, username, password } = body;

      // Validate email
      const existByEmail = await serviceGetDataByColumns(
        "user",
        "email",
        email
      );

      if (existByEmail) {
        return res.status(409).json({ error: "Email already exists" });
      }

      // // Validate username
      const existByUsername = await serviceGetDataByColumns(
        "user",
        "username",
        username
      );

      if (existByUsername) {
        return res.status(409).json({ error: "Username already exists" });
      }

      const hashPassword = await hash(password, 10);
      const newUser = servicePostData("user", {
        email,
        username,
        password: hashPassword,
      });

      return res.status(200).json({ message: "User created" });
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === "GET") {
    if (param) {
      const data = await serviceGetDataByColumns(
        "user",
        "id",
        parseInt(param[0])
      );

      if (data) {
        return res.status(200).json(data);
      }
      return res.status(404).json({ error: "User not found" });
    }

    const data = await serviceGetAllData("user");
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    if (param) {
      const data = await serviceGetDataByColumns(
        "user",
        "id",
        parseInt(param[0])
      );

      if (data) {
        const data = await serviceDeleteData("user", "id", parseInt(param[0]));
        return res.status(200).json(data);
      }
      return res.status(404).json({ error: "User not found" });
    }
  }
}
