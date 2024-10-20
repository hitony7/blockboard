"use client";

import DashboardLayout from "@/layout/DashboardLayout";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";

export default function VotingPage() {
  const [vote, setVote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const project = {
    name: "NextGen Solar Farms",
    description: "Help us decide the future of decentralized solar farms!",
    options: ["Expand Solar Coverage", "Invest in R&D", "Issue Dividends"],
  };

  const user = {
    votingPower: 10,
    totalPower: 100,
  };

  const handleVoteSubmit = () => {
    if (vote) setSubmitted(true);
  };

  return (
    <DashboardLayout>
      <div className="my-8 flex items-center justify-center">
        <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-xl p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">{project.name}</h1>
            <p className="mt-2 text-gray-400">{project.description}</p>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <p>
              Your Voting Power:{" "}
              <span className="font-medium">{user.votingPower}</span>
            </p>
            <p>
              Total Voting Power:{" "}
              <span className="font-medium">{user.totalPower}</span>
            </p>
          </div>
          {!submitted ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">
                Cast Your Vote
              </h2>
              <div className="space-y-4">
                {project.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-4">
                    <input
                      type="radio"
                      name="vote"
                      value={option}
                      onChange={(e) => setVote(e.target.value)}
                      className="w-5 h-5 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-300">{option}</span>
                  </label>
                ))}
              </div>
              <button
                onClick={handleVoteSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
              >
                Submit Vote
              </button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                🎉 Thanks for Voting!
              </h2>
              <p className="text-gray-300">
                You voted for: <span className="font-bold">{vote}</span>
              </p>
            </div>
          )}
          <footer className="flex items-center justify-center mt-6 text-gray-400 space-x-2">
            <FaEthereum size={20} />
            <span>Powered by Blockchain</span>
          </footer>
        </div>
      </div>
    </DashboardLayout>
  );
}
