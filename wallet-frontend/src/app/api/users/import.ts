import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { passPhrase, password } = req.body;
    try {
      const response = await axios.post("http://localhost:3001/users/import", {
        passPhrase,
        password,
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: "Error: Failed to import" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
