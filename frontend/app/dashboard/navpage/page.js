"use client";

import DashboardLayout from "@/layout/DashboardLayout";
import { useState } from "react";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
import { headingFont } from "@/utils/fonts";

// Company data
const company = {
  name: "Nav Industries",
  description:
    "Nav Gation is an innovative startup focused on redefining the navigation experience with cutting-edge technology. The company aims to create smarter, more intuitive navigation solutions that seamlessly integrate with modern urban life. By leveraging AI-powered route optimization, real-time data analytics, and a user-friendly interface, Nav Gation helps users navigate complex environments efficiently—whether they are commuting, exploring a new city, or managing delivery logistics. Committed to sustainability, the startup also prioritizes eco-friendly routes to reduce carbon footprints. Nav Gation is poised to revolutionize how people move, enhancing convenience, safety, and connectivity for individuals and businesses alike.",
};

export default function VotingPage() {
  const [vote, setVote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const project = {
    name: "Nav",
    description: "Help us decide the future of Navigation!",
    options: ["Add new features", "Invest in R&D", "Issue Dividends"],
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
      <div className="my-8 flex">
        {/* Sidebar with Single Company Info */}
        <div className="w-1/4 bg-secondary p-6 space-y-6">
          <h2 className={`${headingFont.className} text-2xl text-primary`}>Company</h2>
          <div className="mt-4 ">
            <h3 className="text-xl font-semibold">{company.name}</h3>
            <p className="text-gray-300 text-md mt-2">{company.description}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 flex items-center justify-center p-6 flex-col gap-3">
          <Link href="/dashboard/new-proposal" className={`text-xl underline font-bold hover:text-primary`}>
            New Proposal
          </Link>
          <div className="w-full max-w-lg bg-secondary shadow-xl p-8 space-y-8">
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
                  className="w-full bg-primary text-white font-medium py-3  transition"
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
      </div>
    </DashboardLayout>
  );
}
