"use client";

import { useState } from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import { headingFont } from "@/utils/fonts";
import { Pie, Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { PieChart } from 'react-minimal-pie-chart';

ChartJS.register(ArcElement, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState("Nav");

  const companies = {
    Nav: { value: 2578.32, tokens: 200000, initialPrice: 0.0100 },
    Company: { value: 15469.92, tokens: 1200000, initialPrice: 0.0110 },
    "Prompt AI": { value: 7734.96, tokens: 600000, initialPrice: 0.0105 },
  };

  const totalValue = Object.values(companies).reduce((acc, company) => acc + company.value, 0);
  const totalTokens = Object.values(companies).reduce((acc, company) => acc + company.tokens, 0);

  const getTokenPrice = (company) => company.value / company.tokens;
  const getGainPercentage = (company) => ((getTokenPrice(company) - company.initialPrice) / company.initialPrice) * 100;
  const getBuyInValue = (company) => company.tokens * company.initialPrice;
  const getGainValue = (company) => company.value - getBuyInValue(company);
  const getPortfolioPercentage = (company) => (company.value / totalValue) * 100;

  const priceHistories = {
    Nav: [0.0100, 0.0110, 0.0115, 0.0120, 0.0125, 0.0128, getTokenPrice(companies.Nav)],
    Company: [0.0110, 0.0115, 0.0120, 0.0125, 0.0128, 0.0130, getTokenPrice(companies.Company)],
    "Prompt AI": [0.0105, 0.0112, 0.0118, 0.0122, 0.0126, 0.0129, getTokenPrice(companies["Prompt AI"])],
  };

  const pieData = {
    labels: Object.keys(companies),
    datasets: [{
      data: Object.values(companies).map(company => company.value),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverOffset: 4,
    }],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Token Price (USD)",
      data: priceHistories[selectedCompany],
      fill: false,
      borderColor: "#4CAF50",
      tension: 0.1,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#FFFFFF', font: { size: 12 } }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#FFFFFF', font: { size: 12 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        ticks: { color: '#FFFFFF', font: { size: 12 } }
      }
    }
  };

  const pieChartData = Object.entries(companies).map(([name, company], index) => ({
    title: name,
    value: getPortfolioPercentage(company),
    color: ["#FF6384", "#36A2EB", "#FFCE56"][index],
  }));

  return (
    <DashboardLayout>
      <div className="my-8 grid grid-cols-12 gap-8">
        <motion.div
          className="col-span-8 bg-gradient-to-br from-secondary to-secondary-dark p-6 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className={`${headingFont.className} text-2xl text-primary`}>Token Price History</h2>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="bg-gray-700 text-white rounded-md px-2 py-1"
            >
              {Object.keys(companies).map((company) => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </div>
          <div className="h-80">
            <Line data={lineData} options={chartOptions} />
          </div>
        </motion.div>

        <motion.div
          className="col-span-4 bg-gradient-to-br from-secondary to-secondary-dark p-6 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className={`${headingFont.className} text-2xl text-primary mb-4`}>Asset Distribution</h2>
          <div className="text-center mb-4">
            <p className="text-white text-lg">Total Value: ${totalValue.toLocaleString()}</p>
            <p className="text-white text-sm">Total Tokens: {totalTokens.toLocaleString()}</p>
          </div>
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
            <div className="w-1/2 space-y-2">
              {pieChartData.map((data, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300 flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: data.color }}></span>
                    {data.title}
                  </span>
                  <span className="text-primary font-semibold">
                    {data.value.toFixed(1)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-6">
        {Object.entries(companies).map(([name, company], index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-secondary to-secondary-dark p-4 rounded-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <h3 className={`${headingFont.className} text-xl text-primary mb-2`}>{name}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Tokens</p>
                <p className="text-white">{company.tokens.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400">Token Price</p>
                <p className="text-white">${getTokenPrice(company).toFixed(6)}</p>
              </div>
              <div>
                <p className="text-gray-400">Buy-in Value</p>
                <p className="text-white">${getBuyInValue(company).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-400">Current Value</p>
                <p className="text-white">${company.value.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-400">Portfolio %</p>
                <p className="text-white">{getPortfolioPercentage(company).toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-gray-400">Gain</p>
                <p className={getGainValue(company) >= 0 ? 'text-green-400' : 'text-red-400'}>
                  ${getGainValue(company).toFixed(2)} ({getGainPercentage(company).toFixed(2)}%)
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
