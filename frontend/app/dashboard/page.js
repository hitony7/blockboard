"use client"; // Ensure this is a Client Component

import { useState, useEffect } from "react";
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
import { FaChartLine, FaChartPie } from "react-icons/fa";

// Register the required components
ChartJS.register(ArcElement, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setChartData({
        pieData: {
          labels: ["Nav", "Company", "Prompt AI"],
          datasets: [{
            data: [30, 50, 20],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          }],
        },
        lineData: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [{
            label: "Price Over Time (USD)",
            data: [100, 150, 120, 170, 200, 180, 220],
            borderColor: "#4FD1C5",
            tension: 0.1,
          }],
        },
        assets: [
          { name: "Nav", value: 30, tokens: 300 },
          { name: "Company", value: 50, tokens: 500 },
          { name: "Prompt AI", value: 20, tokens: 200 },
        ],
      });
    }, 1000);
  }, []);

  const totalValue = chartData?.assets.reduce((acc, asset) => acc + asset.value, 0) || 0;
  const totalTokens = chartData?.assets.reduce((acc, asset) => acc + asset.tokens, 0) || 0;

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className={`${headingFont.className} text-4xl mb-8 text-white text-center`}>Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-secondary rounded-lg shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FaChartLine className="mr-2" /> Price Tracking
            </h2>
            <div className="h-[400px]">
              {chartData ? (
                <Line
                  data={chartData.lineData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: { ticks: { color: '#FFFFFF' } },
                      y: { ticks: { color: '#FFFFFF' } }
                    },
                    plugins: {
                      legend: { labels: { color: '#FFFFFF' } }
                    }
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-secondary rounded-lg shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FaChartPie className="mr-2" /> Asset Distribution
            </h2>
            <div className="text-center mb-4">
              <p className="text-white font-bold">Total Value: ${totalValue}</p>
              <p className="text-white font-bold">Total Tokens: {totalTokens}</p>
            </div>
            <div className="h-[300px] flex items-center justify-center">
              {chartData ? (
                <Pie
                  data={chartData.pieData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { position: 'bottom', labels: { color: '#FFFFFF' } }
                    }
                  }}
                />
              ) : (
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
              )}
            </div>
            <div className="mt-4 space-y-2">
              {chartData?.assets.map((asset, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-700 p-2 rounded-md"
                >
                  <p className="text-white text-sm font-semibold">
                    {asset.name}: {asset.tokens} tokens ({asset.value}%)
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}

