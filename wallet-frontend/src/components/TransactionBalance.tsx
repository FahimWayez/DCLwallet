import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionBalance: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://192.168.186.8:3000/transaction/balance/0413c725274b4709b5faef702e0e91241eefca047a041561ce1d02e7e397fbe665de7f332c4799203770b16958f5e9989c3f11f0ae352588a75f440b891dc990b0"
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      {<p>Balance: {balance}</p>}
    </div>
  );
};

export default TransactionBalance;
