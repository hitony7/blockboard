"use client";

import DashboardLayout from "@/layout/DashboardLayout";
import { useState, useEffect } from "react";
import { FaEthereum, FaChartLine, FaUsers, FaRocket, FaLeaf, FaCity, FaVoteYea, FaChartPie } from "react-icons/fa";
import { headingFont } from "@/utils/fonts";
import { motion } from "framer-motion";
import { PieChart } from 'react-minimal-pie-chart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Company data
const company = {
  name: "Nav Industries",
  description: [
    "Nav Gation is an innovative startup focused on redefining the navigation experience with cutting-edge technology.",
    "The company aims to create smarter, more intuitive navigation solutions that seamlessly integrate with modern urban life.",
    "By leveraging AI-powered route optimization, real-time data analytics, and a user-friendly interface, Nav Gation helps users navigate complex environments efficiently—whether they are commuting, exploring a new city, or managing delivery logistics.",
    "Committed to sustainability, the startup also prioritizes eco-friendly routes to reduce carbon footprints.",
    "Nav Gation is poised to revolutionize how people move, enhancing convenience, safety, and connectivity for individuals and businesses alike.",
  ],
};

export default function VotingPage() {
  const [vote, setVote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [treasuryPercentage, setTreasuryPercentage] = useState(0);

  const project = {
    name: "Nav",
    description: "Help us decide the future of Navigation!",
    options: ["Add new features", "Invest in R&D", "Issue Dividends"],
  };

  const user = {
    votingPower: 10,
    totalPower: 100,
  };

  const treasury = {
    current: 750000,
    max: 1000000,
  };

  const votingStats = {
    totalVotes: 75,
    optionVotes: {
      "Add new features": 30,
      "Invest in R&D": 25,
      "Issue Dividends": 20,
    },
  };

  useEffect(() => {
    const percentage = (treasury.current / treasury.max) * 100;
    setTreasuryPercentage(percentage);
  }, []);

  const handleVoteSubmit = () => {
    if (vote) setSubmitted(true);
  };

  const calculatePercentage = (votes) => {
    return ((votes / votingStats.totalVotes) * 100).toFixed(1);
  };

  const pieChartData = project.options.map((option, index) => ({
    title: option,
    value: votingStats.optionVotes[option] || 0,
    color: [`#FF6384`, `#36A2EB`, `#FFCE56`][index],
  }));

  const userVotingPercentage = (user.votingPower / user.totalPower) * 100;

  return (
    <DashboardLayout>
      <div className="my-8 grid grid-cols-12 gap-8">
        {/* Sidebar with Single Company Info */}
        <motion.div
          className="col-span-3 bg-gradient-to-br from-secondary to-secondary-dark p-6 space-y-6 rounded-lg shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${headingFont.className} text-2xl text-primary mb-4`}>Company Profile</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">{company.name}</h3>
            {company.description.map((paragraph, index) => (
              <div key={index} className="flex items-start space-x-3 text-gray-300 text-sm">
                {index === 0 && <FaChartLine className="text-primary mt-1 flex-shrink-0" />}
                {index === 1 && <FaUsers className="text-primary mt-1 flex-shrink-0" />}
                {index === 2 && <FaRocket className="text-primary mt-1 flex-shrink-0" />}
                {index === 3 && <FaLeaf className="text-primary mt-1 flex-shrink-0" />}
                {index === 4 && <FaCity className="text-primary mt-1 flex-shrink-0" />}
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="col-span-9 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Voting Box */}
          <div className="bg-gradient-to-br from-secondary to-secondary-dark shadow-xl p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">{project.name}</h1>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
              <div className="text-right flex items-center space-x-4">
                <div>
                  <p className="text-sm text-gray-300">Your Voting Power</p>
                  <p className="text-2xl font-bold text-primary">{userVotingPercentage.toFixed(1)}%</p>
                </div>
                <div style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={userVotingPercentage}
                    text={`${userVotingPercentage.toFixed(0)}%`}
                    styles={buildStyles({
                      textSize: '24px',
                      pathColor: '#10B981',
                      textColor: '#10B981',
                      trailColor: '#374151',
                    })}
                  />
                </div>
              </div>
            </div>

            {!submitted ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {project.options.map((option, index) => (
                    <label key={index} className="flex items-center justify-between bg-white bg-opacity-10 p-3 rounded-lg cursor-pointer hover:bg-opacity-15 transition-all">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="vote"
                          value={option}
                          onChange={(e) => setVote(e.target.value)}
                          className="w-4 h-4 text-primary bg-gray-700 border-gray-600 focus:ring-primary"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-400">
                          {votingStats.optionVotes[option] || 0} votes
                        </span>
                        <span className="text-xs text-primary ml-2">
                          ({calculatePercentage(votingStats.optionVotes[option] || 0)}%)
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleVoteSubmit}
                  className="w-full bg-primary text-white font-medium py-2 rounded-md hover:bg-primary-dark transition duration-300 ease-in-out text-sm"
                >
                  Submit Vote
                </button>
              </div>
            ) : (
              <div className="text-center py-4">
                <h2 className="text-xl font-semibold text-white">
                  🎉 Thanks for Voting!
                </h2>
                <p className="text-gray-300 mt-2">
                  You voted for: <span className="font-bold">{vote}</span>
                </p>
              </div>
            )}
          </div>

          {/* Voting Statistics and Treasury */}
          <div className="grid grid-cols-2 gap-6">
            {/* Voting Statistics */}
            <motion.div
              className="bg-gradient-to-br from-secondary to-secondary-dark p-4 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className={`${headingFont.className} text-xl text-primary mb-3 flex items-center`}>
                <FaChartPie className="mr-2" /> Voting Statistics
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-1/2">
                  <PieChart
                    data={pieChartData}
                    lineWidth={15}
                    paddingAngle={5}
                    rounded
                    labelPosition={65}
                    labelStyle={{
                      fontSize: '4px',
                      fontFamily: 'sans-serif',
                      fill: '#fff',
                    }}
                  />
                </div>
                <div className="w-1/2 space-y-1">
                  {project.options.map((option, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: pieChartData[index].color }}></span>
                        {option}
                      </span>
                      <span className="text-primary font-semibold">
                        {calculatePercentage(votingStats.optionVotes[option] || 0)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Treasury Box */}
            <motion.div
              className="bg-gradient-to-br from-secondary to-secondary-dark p-4 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className={`${headingFont.className} text-xl text-primary mb-3 flex items-center`}>
                <FaEthereum className="mr-2" /> Treasury
              </h2>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">Current Balance</p>
                  <p className="text-2xl font-bold text-white">${treasury.current.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Max: ${treasury.max.toLocaleString()}</p>
                </div>
                <div style={{ width: 100, height: 100 }}>
                  <CircularProgressbar
                    value={treasuryPercentage}
                    text={`${treasuryPercentage.toFixed(0)}%`}
                    styles={buildStyles({
                      textSize: '16px',
                      pathColor: '#3B82F6',
                      textColor: '#3B82F6',
                      trailColor: '#374151',
                    })}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}


