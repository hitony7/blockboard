"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { usePathname } from "next/navigation";

export default function NavigationDashboard() {
  const [web3Instance, setWeb3Instance] = useState(null);
  const [account, setAccount] = useState(null);
  const pathname = usePathname();

  const connectMetaMask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const web3 = new Web3(window.ethereum);
        setWeb3Instance(web3);

        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log("MetaMask connected:", accounts[0]);
        } else {
          console.log("No accounts found.");
        }
      } catch (error) {
        if (error.code === 4001) {
          console.error("User rejected the connection request.");
        } else {
          console.error("Error connecting to MetaMask:", error);
        }
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask and try again.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      const checkIfConnected = async () => {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setWeb3Instance(web3);
          setAccount(accounts[0]);
          console.log("Already connected:", accounts[0]);
        }
      };

      checkIfConnected();

      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log("Account changed:", accounts[0]);
        } else {
          setAccount(null);
          console.log("No accounts found.");
        }
      };

      const handleChainChanged = () => {
        window.location.reload();
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-between p-3">
      <Link href="/">
        <Image className="w-44 md:w-52" src={logo} width={200} alt="logo" />
      </Link>
      <div className="flex gap-3 items-center text-sm">
        <Link href="/dashboard" className={`text-sm font-bold hover:text-primary ${pathname === "/dashboard" ? "text-primary" : "text-gray-300"}`}>
          Dashboard
        </Link>
        <Link href="/dashboard/investors" className={`text-sm font-bold hover:text-primary ${pathname === "/dashboard/investors" ? "text-primary" : "text-gray-300"}`}>
          Investors
        </Link>
        <Link href="/dashboard/companies" className={`text-sm font-bold hover:text-primary ${pathname === "/dashboard/companies" ? "text-primary" : "text-gray-300"}`}>
          Companies
        </Link>
        <Link href="/dashboard/navpage" className={`text-sm font-bold hover:text-primary ${pathname === "/dashboard/navpage" ? "text-primary" : "text-gray-300"}`}>
          Navpage?
        </Link>
        <Link href="/dashboard/new-proposal" className={`text-sm font-bold hover:text-primary ${pathname === "/dashboard/new-proposal" ? "text-primary" : "text-gray-300"}`}>
          New Proposal
        </Link>
        <Link href="/dashboard/voting" className={`text-sm font-bold hover:text-primary ${pathname === "/dashboard/voting" ? "text-primary" : "text-gray-300"}`}>
          Voting
        </Link>
        {account ? (
          <span className=" text-sm font-bold">{`Connected: ${account.substring(0, 6)}...${account.slice(-4)}`}</span>
        ) : (
          <button
            onClick={connectMetaMask}
            className="px-4 py-2 text-sm font-bold bg-orange-500 rounded hover:bg-orange-600 transition-colors"
          >
            Connect MetaMask
          </button>
        )}
      </div>
    </div>
  );
}
