"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBuilding } from "react-icons/fa"; // Building icon import
import DashboardLayout from "@/layout/DashboardLayout";

// Dummy data for company names
const companyNames = [
  "Nav",
  "Company",
  "Prompt AI",
  "GenRep",
  "Sensible Trade",
  "Rent Play",
  "Blockboard",
  "School Run",
  "Zag Zig",
  "Hey Local",
  "Human Care",
  "Tyrell Corporation",
  "Dinoco",
  "Oscorp",
  "Duff Beer",
  "LexCorp",
  "OmniCorp",
  "Xanatos Enterprises",
];

export default function CompanyCards() {
  const [companies] = useState(companyNames);
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/dashboard/navpage");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light text-white mb-6 text-center">
            Company Cards
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {companies.map((company, index) => (
              <div
                key={index}
                onClick={handleCardClick}
                className="bg-secondary text-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <FaBuilding className="text-3xl text-white mr-3" />
                  <h2 className="text-2xl font-semibold">{company}</h2>
                </div>
                <p className="text-gray-300">
                  Innovating the future of decentralized technology.
                </p>
                <div className="flex mt-4 space-x-4 text-gray-400">
                  <div className="flex items-center">
                    <span className="mr-1">🌐</span> Ethereum
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">👛</span> Wallet-based
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
