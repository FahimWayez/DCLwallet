import React, { useState } from "react";
import axios from "axios";

interface IUserRegisterProps {
  onRegister: (
    message: string,
    mnemonic?: string,
    publicKey?: string,
    password?: string,
    privateKey?: string
  ) => void;
}

const UserRegister: React.FC<IUserRegisterProps> = ({ onRegister }) => {
  const [password, setPassword] = useState("");
  const [mnemonic, setMnemonic] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/register`,
        {
          password,
        }
      );

      const { message, mnemonic, publicKey, privateKey } = response.data;

      setMnemonic(mnemonic);
      setPublicKey(publicKey);
      setPrivateKey(privateKey);

      onRegister(message, mnemonic, publicKey, password, privateKey);
    } catch (error) {
      console.error("Error registering user:", error);
      onRegister("Error: Failed to register");
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6 w-max">
      <h2 className="text-lg font-semibold mb-4">Register</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="input border rounded border-gray-800 p-1"
      />
      <br />
      <br />
      <button
        onClick={handleRegister}
        className="btn border rounded border-white bg-gray-800 text-white p-1"
      >
        Register
      </button>

      {mnemonic && (
        <div className="mt-4">
          <p>Mnemonic: {mnemonic}</p>
          <p>Public Key: {publicKey}</p>
          {/* Avoid displaying the password and private key */}
        </div>
      )}
    </div>
  );
};

export default UserRegister;
