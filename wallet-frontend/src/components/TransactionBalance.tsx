
import React, { useState, useEffect } from "react";
import axios from "axios";

interface ChildComponentProps {
  msg: string
}

const TransactionBalance: React.FC<ChildComponentProps> = ({msg}) => {
  const [balance, setBalance] = useState<number | null>(null);
 


  // setInterval(() => {
  //   const fetchBalance = async () => {
  //     try {
  //       const user: any = localStorage.getItem('user')
  //       if(!user) return;
  //       console.log(user)
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_API_ENDPOINT_CHAIN}/transaction/balance/${user.publicKey}`
  //       );
  //       setBalance(response.data.balance);
  //     } catch (error) {
  //       console.error("Error fetching balance:", error);
  //     }
  //   };

  //   fetchBalance();
  // }, 1000)

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <p>Balance: {balance != null ? balance : "Loading..."}</p>
    </div>
  );
};

export default TransactionBalance;
