"use client";

import { useState } from 'react';

// Dummy data for company names
const companyNames = [
  'Nav',
  'Company',
  'Prompt AI',
  'GenRep',
  'Sensible Trade',
  'Rent Play',
  'Blockboard',
  'School Run',
  'Zag Zig',
  'Hey Local',
  'Human Care',
  'Tyrell Corporation',
  'Dinoco',
  'Oscorp',
  'Duff Beer',
  'LexCorp',
  'OmniCorp',
  'Xanatos Enterprises',
];

export default function CompanyCards() {
  const [companies] = useState(companyNames);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Company Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-10 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold">{company}</h2>
              <p className="text-gray-400 mt-4">Innovating the future.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}  
