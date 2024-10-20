"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/layout/DashboardLayout";
import { headingFont } from "@/utils/fonts";

export default function Buyer() {
  const router = useRouter(); // Initialize the router hook

  const [formData, setFormData] = useState({
    category: "",
    price: "",
    revenue: "",
    revenueMultiple: "",
    ttmRevenue: "",
    profit: "",
    customPrice: "",
    customRevenue: "",
    customTTMRevenue: "",
    customProfit: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push("/companypage");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary shadow-xl px-10 py-12">
            <h2 className={`${headingFont.className} text-4xl font-light text-white mb-4 text-center`}>
              Discover Your Next Investment
            </h2>
            <p className="text-lg text-gray-300 mb-10 text-center">
              Filter companies based on your investment criteria and find the
              perfect match.
            </p>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Category Selection */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-lg font-medium text-white mb-3"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-white border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="text-black" value="">All Categories</option>
                    <option className="text-black" value="technology">Technology</option>
                    <option className="text-black" value="healthcare">Healthcare</option>
                    <option className="text-black" value="finance">Finance</option>
                    <option className="text-black" value="real-estate">Real Estate</option>
                    <option className="text-black" value="consumer-goods">Consumer Goods</option>
                    <option className="text-black" value="other">Other</option>
                  </select>
                </div>

                {/* Price Selection */}
                <div>
                  <label
                    htmlFor="price"
                    className="block text-lg font-medium text-white mb-3"
                  >
                    Price
                  </label>
                  <select
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="text-black" value="">Any Price</option>
                    <option className="text-black" value="0-100000">$0 - $100,000</option>
                    <option className="text-black" value="100000-500000">$100,000 - $500,000</option>
                    <option className="text-black" value="500000-1000000">
                      $500,000 - $1,000,000
                    </option>
                    <option className="text-black" value="1000000+">$1,000,000+</option>
                    <option className="text-black" value="custom">Custom</option>
                  </select>
                  {formData.price === "custom" && (
                    <input
                      type="text"
                      name="customPrice"
                      value={formData.customPrice}
                      onChange={handleChange}
                      placeholder="Enter custom price"
                      className="mt-2 block w-full px-4 py-3 text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>

                {/* Revenue Selection */}
                <div>
                  <label
                    htmlFor="revenue"
                    className="block text-lg font-medium text-white mb-3"
                  >
                    Revenue
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-white border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="text-black" value="">Any Revenue</option>
                    <option className="text-black" value="0-100000">$0 - $100,000</option>
                    <option className="text-black" value="100000-500000">$100,000 - $500,000</option>
                    <option className="text-black" value="500000-1000000">$500,000 - $1,000,000</option>
                    <option className="text-black" value="1000000+">$1,000,000+</option>
                    <option className="text-black" value="custom">Custom</option>
                  </select>
                  {formData.revenue === 'custom' && (
                    <input
                      type="text"
                      name="customRevenue"
                      value={formData.customRevenue}
                      onChange={handleChange}
                      placeholder="Enter custom revenue"
                      className="mt-2 block w-full px-4 py-3 text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>

                {/* Revenue Multiple Selection */}
                <div>
                  <label
                    htmlFor="revenueMultiple"
                    className="block text-lg font-medium text-white mb-3"
                  >
                    Revenue Multiple
                  </label>
                  <select
                    id="revenueMultiple"
                    name="revenueMultiple"
                    value={formData.revenueMultiple}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-white border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="text-black" value="">Any Multiple</option>
                    <option className="text-black" value="0-1">0x - 1x</option>
                    <option className="text-black" value="1-3">1x - 3x</option>
                    <option className="text-black" value="3-5">3x - 5x</option>
                    <option className="text-black" value="5+">5x+</option>
                  </select>
                </div>

                {/* TTM Revenue Selection */}
                <div>
                  <label
                    htmlFor="ttmRevenue"
                    className="block text-lg font-medium text-white mb-3"
                  >
                    12-Month TTM Revenue
                  </label>
                  <select
                    id="ttmRevenue"
                    name="ttmRevenue"
                    value={formData.ttmRevenue}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-white border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="text-black" value="">Any Revenue</option>
                    <option className="text-black" value="0-100000">$0 - $100,000</option>
                    <option className="text-black" value="100000-500000">$100,000 - $500,000</option>
                    <option className="text-black" value="500000-1000000">$500,000 - $1,000,000</option>
                    <option className="text-black" value="1000000+">$1,000,000+</option>
                    <option className="text-black" value="custom">Custom</option>
                  </select>
                  {formData.ttmRevenue === 'custom' && (
                    <input
                      type="text"
                      name="customTTMRevenue"
                      value={formData.customTTMRevenue}
                      onChange={handleChange}
                      placeholder="Enter custom TTM revenue"
                      className="mt-2 block w-full px-4 py-3 text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>

                {/* Profit Selection */}
                <div>
                  <label
                    htmlFor="profit"
                    className="block text-lg font-medium text-white mb-3"
                  >
                    Profit
                  </label>
                  <select
                    id="profit"
                    name="profit"
                    value={formData.profit}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-white border border-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option className="text-black" value="">Any Profit</option>
                    <option className="text-black" value="0-50000">$0 - $50,000</option>
                    <option className="text-black" value="50000-100000">$50,000 - $100,000</option>
                    <option className="text-black" value="100000-500000">$100,000 - $500,000</option>
                    <option className="text-black" value="500000+">$500,000+</option>
                    <option className="text-black" value="custom">Custom</option>
                  </select>
                  {formData.profit === 'custom' && (
                    <input
                      type="text"
                      name="customProfit"
                      value={formData.customProfit}
                      onChange={handleChange}
                      placeholder="Enter custom profit"
                      className="mt-2 block w-full px-4 py-3 text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-1/2 py-4 px-6 text-lg font-bold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Search Companies
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}