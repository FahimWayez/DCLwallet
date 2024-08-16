import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const backendUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { password } = req.body;
    try {
      const response = await axios.post(`${backendUrl}/users/register`, {
        password,
      });
      console.log(response)
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: "Error: Failed to register" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
