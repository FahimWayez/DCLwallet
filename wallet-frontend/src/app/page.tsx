"use client";
import React, { useState } from "react";
import UserRegister from "../components/UserRegister";
import UserImport from "../components/UserImport";
import UserTransaction from "../components/UserTransaction";
import TransactionBalance from "../components/TransactionBalance"; // Import TransactionBalance component

const Home: React.FC = () => {
  const [registerMessage, setRegisterMessage] = useState("");
  const [importMessage, setImportMessage] = useState("");
  const [transactionMessage, setTransactionMessage] = useState("");

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-start justify-center">
      <header className="w-full shadow bg-gray-800 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center text-white">
            <div className="text-xl font-semibold">
              <h1>DCL Wallet</h1>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex flex-col items-start min-h-screen py-10 bg-gray-800 px-4">
        <TransactionBalance />
        <br></br>
        <UserRegister onRegister={setRegisterMessage} />
        <UserImport onImport={setImportMessage} />
        <UserTransaction onTransaction={setTransactionMessage} />
      </div>

      <footer className="w-full shadow mt-8 border-t bg-gray-800 border-gray-100">
        <div className="container mx-auto px-6 py-3">
          <p className="text-white text-center">
            © 2023 DCL Wallet. All rights reserved.
          </p>
        </div>
      </footer>

      <div className="text-center mt-4">
        <div className="text-sm text-green-500">{registerMessage}</div>
        <div className="text-sm text-green-500">{importMessage}</div>
        <div className="text-sm text-green-500">{transactionMessage}</div>
      </div>
    </div>
  );
};

export default Home;
