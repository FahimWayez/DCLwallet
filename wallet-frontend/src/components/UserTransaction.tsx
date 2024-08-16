// UserTransaction.tsx
import React, { useState } from "react";
import axios from "axios";

interface IUserTransactionProps {
  onTransaction: (message: string, transaction?: Transaction) => void;
}

interface Transaction {
  status: string;
  block: number;
  timestamp: number;
  transactionAction: string;
  from: string;
  to: string;
  value: number;
  transactionFee: number;
  gasPrice: number;
  transactionHash: string;
  signature: string;
}

const UserTransaction: React.FC<IUserTransactionProps> = ({
  onTransaction,
}) => {
  const [senderPrivateKey, setSenderPrivateKey] = useState("");
  const [senderPublicKey, setSenderPublicKey] = useState("");
  const [senderPassword, setSenderPassword] = useState("");
  const [receiverPublicKey, setReceiverPublicKey] = useState("");
  const [value, setValue] = useState(0);
  const [transaction, setTransaction] = useState<Transaction | undefined>(
    undefined
  );

  const handleTransaction = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_ENDPOINT + "/users/transaction",
        {
          senderPrivateKey,
          senderPublicKey,
          senderPassword,
          receiverPublicKey,
          value,
        }
      );

      const { message, transaction } = response.data;

      setTransaction(transaction);

      onTransaction(message, transaction);
    } catch (error) {
      console.error(error);
      onTransaction("Error: Failed to make transaction");
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Make Transaction</h2>
      <input
        type="text"
        value={senderPrivateKey}
        onChange={(e) => setSenderPrivateKey(e.target.value)}
        placeholder="Enter sender private key"
        className="input border rounded border-gray-800 p-1"
      />
      <br></br>
      <br></br>
      <input
        type="text"
        value={senderPublicKey}
        onChange={(e) => setSenderPublicKey(e.target.value)}
        placeholder="Enter sender public key"
        className="input border rounded border-gray-800 p-1"
      />
      <br></br>
      <br></br>
      <input
        type="text"
        value={senderPassword}
        onChange={(e) => setSenderPassword(e.target.value)}
        placeholder="Enter sender password"
        className="input border rounded border-gray-800 p-1"
      />
      <br></br>
      <br></br>
      <input
        type="text"
        value={receiverPublicKey}
        onChange={(e) => setReceiverPublicKey(e.target.value)}
        placeholder="Enter receiver public key"
        className="input border rounded border-gray-800 p-1"
      />
      <br></br>
      <br></br>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="Enter value"
        className="input border rounded border-gray-800 p-1"
      />
      <br></br>
      <br></br>
      <button
        onClick={handleTransaction}
        className="btn border rounded border-white bg-gray-800 text-white p-1"
      >
        Make Transaction
      </button>

      {transaction && (
        <div className="mt-4">
          <p>Transaction Status: {transaction.status}</p>
          <p>Transaction Block: {transaction.block}</p>
          <p>Transaction Timestamp: {transaction.timestamp}</p>
          <p>Transaction Action: {transaction.transactionAction}</p>
          <p>From: {transaction.from}</p>
          <p>To: {transaction.to}</p>
          <p>Value: {transaction.value}</p>
          <p>Transaction Fee: {transaction.transactionFee}</p>
          <p>Gas Price: {transaction.gasPrice}</p>
          <p>Transaction Hash: {transaction.transactionHash}</p>
          <p>Signature: {transaction.signature}</p>
        </div>
      )}
    </div>
  );
};

export default UserTransaction;
