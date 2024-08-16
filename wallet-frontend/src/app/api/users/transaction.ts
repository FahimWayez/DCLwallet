import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      senderPrivateKey,
      senderPublicKey,
      senderPassword,
      receiverPublicKey,
      value,
    } = req.body;
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_ENDPOINT_CHAIN + "",
        {
          senderPrivateKey,
          senderPublicKey,
          senderPassword,
          receiverPublicKey,
          value,
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: "Error: Failed to make transaction" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
