"use client"; // Ensure this is a Client Component

import NavigationDashboard from "@/components/NavigationDashboard";
import Footer from "@/components/Footer";
import { headingFont } from "@/utils/fonts";
import { Pie, Line } from "react-chartjs-2";
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

// Register the required components
ChartJS.register(ArcElement, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  // Sample data for the pie chart
  const pieData = {
    labels: ["Nav", "Company", "Prompt AI"],
    datasets: [
      {
        label: "Sample Data",
        data: [30, 50, 20], // Pie chart values
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  // Sample assets data (including token amounts)
  const assets = [
    { name: "Nav", value: 30, tokens: 300 },
    { name: "Company", value: 50, tokens: 500 },
    { name: "Prompt AI", value: 20, tokens: 200 },
  ];

  // Calculate total value and total tokens
  const totalValue = assets.reduce((acc, asset) => acc + asset.value, 0);
  const totalTokens = assets.reduce((acc, asset) => acc + asset.tokens, 0);

  // Sample data for the price tracking line chart
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example months
    datasets: [
      {
        label: "Price Over Time (USD)",
        data: [100, 150, 120, 170, 200, 180, 220], // Sample price data
        fill: false,
        borderColor: "#FFFFFF", // Set line color to white
        tension: 0.1, // Add some smoothing to the line
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <NavigationDashboard />
      <main className="flex flex-col items-center my-20"> {/* Center content vertically */}
        <h1 className={`${headingFont.className} text-3xl mb-6 text-white`}>Dashboard</h1> {/* Set heading text to white */}
        <div className="flex w-full max-w-7xl items-start justify-between space-x-10"> {/* Increase max width for layout */}
          {/* Price Tracking Line Chart */}
          <div className="flex flex-col items-center w-3/4 h-[800px]"> {/* Increased height */}
            <h2 className="text-xl font-bold text-white mb-4">Price Tracking</h2> {/* Set to white */}
            <div className="w-full h-full">
              <Line data={lineData} options={{ scales: { x: { ticks: { color: '#FFFFFF' } }, y: { ticks: { color: '#FFFFFF' } } } }} /> {/* Set axes text to white */}
            </div>
          </div>

          {/* Combined Asset Box and Pie Chart */}
          <div className="flex flex-col items-center w-1/4 space-y-4 h-[800px]"> {/* Adjusted height */}
            {/* Asset Box with Pie Chart */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full h-full flex flex-col justify-between"> {/* Full height */}
              {/* Total Value Display */}
              <div className="text-center mb-2">
                <p className="text-white font-bold text-sm">Total Value: ${totalValue}</p>
                <p className="text-white font-bold text-xs">Total Tokens: {totalTokens}</p>
              </div>
              <h2 className="text-lg font-bold text-white mb-2 text-center">Assets</h2>
              <div className="flex flex-col space-y-1 mb-4">
                {assets.map((asset, index) => (
                  <div key={index} className="bg-gray-700 p-2 rounded-md text-center">
                    <p className="text-white text-sm font-semibold">
                      {asset.name}: Tokens {asset.tokens} ({asset.value}%)
                    </p>
                  </div>
                ))}
              </div>
              {/* Pie Chart Inside Asset Box */}
              <div className="flex items-center justify-center w-full h-2/3"> {/* Adjusted height */}
                <Pie 
                  data={pieData}
                  options={{ plugins: { legend: { labels: { color: '#FFFFFF' } } } }} // Set legend text to white
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

