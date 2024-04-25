import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionBalance: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://192.168.126.8:3000/transaction/balance/04c8bcdaf3398c9109f30e7f643aa543b5c6ee1f78ac66c9a2320ad0140754ac388630cef350052264bb397ece508ea76e552c8dc0ea4a30f02a9390cb79bfeb29"
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
