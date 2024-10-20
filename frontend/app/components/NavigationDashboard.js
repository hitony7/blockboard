"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import { useState, useEffect } from "react";
import Web3 from "web3";

export default function NavigationDashboard() {
  const [web3Instance, setWeb3Instance] = useState(null);
  const [account, setAccount] = useState(null);

  // Function to connect to MetaMask
  const connectMetaMask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Create a web3 instance
        const web3 = new Web3(window.ethereum);
        setWeb3Instance(web3);

        // Get accounts
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log("MetaMask connected:", accounts[0]);
        } else {
          console.log("No accounts found.");
        }
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
          console.error("User rejected the connection request.");
        } else {
          console.error("Error connecting to MetaMask:", error);
        }
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask and try again.");
    }
  };

  // Listen for account and network changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      // Check if already connected
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

      // Account change listener
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log("Account changed:", accounts[0]);
        } else {
          setAccount(null);
          console.log("No accounts found.");
        }
      };

      // Network change listener
      const handleChainChanged = () => {
        window.location.reload();
      };

      // Add event listeners
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);

      // Cleanup event listeners on component unmount
      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-secondary">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src={logo} width={180} alt="logo" />
        </Link>
      </div>
      <div className="flex gap-3 items-center text-sm">
        {/* Link to the Investor Page */}
        <Link href="/dashboard/buyers" className="hover:text-primary">
          Investors
        </Link>
        <Link href="/dashboard/companies" className="hover:text-primary">
          Companies
        </Link>
        <Link href="/dashboard/navpage" className="hover:text-primary">
          Navpage?
        </Link>
        <Link href="/dashboard/new-proposal" className="hover:text-primary">
          New Proposal
        </Link>
        <Link href="/dashboard/voting" className="hover:text-primary">
          Voting
        </Link>
        {account ? (
          <span className="text-white">{`Connected: ${account.substring(
            0,
            6
          )}...${account.slice(-4)}`}</span>
        ) : (
          <button
            onClick={connectMetaMask}
            className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors"
          >
            Connect MetaMask
          </button>
        )}
      </div>
    </div>
  );
}
