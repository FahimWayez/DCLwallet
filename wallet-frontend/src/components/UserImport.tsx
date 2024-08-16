import React, { useState } from "react";
import axios from "axios";

interface IUserImportProps {
  onImport: (message: string, publicKey?: string, privateKey?: string) => void;
}

const UserImport: React.FC<IUserImportProps> = ({ onImport }) => {
  const [passPhrase, setPassPhrase] = useState("");
  const [password, setPassword] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleImport = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/import`,
        {
          passPhrase,
          password,
        }
      );

      const { message, publicKey, privateKey } = response.data;

      setPublicKey(publicKey);
      setPrivateKey(privateKey);

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));

      onImport(message, publicKey, privateKey);
    } catch (error) {
      console.error("Error importing user:", error);
      setPublicKey("")
      setPrivateKey("")
      onImport("Error: Failed to import");
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6 w-max">
      <h2 className="text-lg font-semibold mb-4">Import</h2>
      <input
        type="text"
        value={passPhrase}
        onChange={(e) => setPassPhrase(e.target.value)}
        placeholder="Enter pass phrase"
        className="input border rounded border-gray-800 p-1"
      />
      <br />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="input border rounded border-gray-800 p-1"
      />
      <br />
      <br />
      <button
        onClick={handleImport}
        className="btn border rounded border-white bg-gray-800 text-white p-1"
      >
        Import
      </button>

      {publicKey && (
        <div className="mt-4">
          <p>Public Key: {publicKey}</p>
          <p>Private Key: {privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default UserImport;
