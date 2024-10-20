"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/layout/DashboardLayout";
import { headingFont } from "@/utils/fonts";
import { motion } from "framer-motion";
import { FaBuilding, FaChartLine, FaDollarSign, FaFileAlt, FaLock } from "react-icons/fa";

export default function CreateCompany() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: "",
    category: "",
    askingPrice: "",
    annualRevenue: "",
    netProfit: "",
    description: "",
    financialDocuments: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "financialDocuments") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
    router.push("/dashboard/companies");
  };

  return (
    <DashboardLayout>
      <motion.div
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-secondary shadow-xl px-10 py-12 rounded-lg"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`${headingFont.className} text-4xl font-light text-primary mb-4 text-center`}>
              List Your Company
            </h2>
            <p className="text-lg text-gray-300 mb-10 text-center">
              Provide details about your company to list it for sale.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Company Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="companyName" className="block text-lg font-medium text-gray-300 mb-3 flex items-center">
                    <FaBuilding className="mr-2 text-primary" /> Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-black bg-gray-200 border border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary rounded-md placeholder-gray-500"
                    required
                    placeholder="Enter company name"
                  />
                </motion.div>

                {/* Category Selection */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="category" className="block text-lg font-medium text-gray-300 mb-3 flex items-center">
                    <FaChartLine className="mr-2 text-primary" /> Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-black bg-gray-200 border border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary rounded-md"
                    required
                  >
                    <option value="" disabled>Select a Category</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="consumer-goods">Consumer Goods</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Asking Price Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="askingPrice" className="block text-lg font-medium text-gray-300 mb-3 flex items-center">
                    <FaDollarSign className="mr-2 text-primary" /> Asking Price ($)
                  </label>
                  <input
                    type="number"
                    id="askingPrice"
                    name="askingPrice"
                    value={formData.askingPrice}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-black bg-gray-200 border border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary rounded-md placeholder-gray-500"
                    required
                    placeholder="Enter asking price"
                  />
                </motion.div>

                {/* Annual Revenue Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="annualRevenue" className="block text-lg font-medium text-gray-300 mb-3 flex items-center">
                    <FaChartLine className="mr-2 text-primary" /> Annual Revenue ($)
                  </label>
                  <input
                    type="number"
                    id="annualRevenue"
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-black bg-gray-200 border border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary rounded-md placeholder-gray-500"
                    required
                    placeholder="Enter annual revenue"
                  />
                </motion.div>

                {/* Net Profit Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="netProfit" className="block text-lg font-medium text-gray-300 mb-2 flex items-center">
                    <FaDollarSign className="mr-2 text-primary" /> Net Profit ($)
                  </label>
                  <input
                    type="number"
                    id="netProfit"
                    name="netProfit"
                    value={formData.netProfit}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 text-black bg-gray-200 border border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary rounded-md placeholder-gray-500"
                    required
                    placeholder="Enter net profit"
                  />
                </motion.div>
              </div>

              {/* Financial Documents Upload */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label htmlFor="financialDocuments" className="block text-lg font-medium text-gray-300 mb-2 flex items-center">
                  <FaLock className="mr-2 text-primary" /> Financial Documents (Secure Upload)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-gray-800">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="financialDocuments"
                        className="relative cursor-pointer bg-primary rounded-md font-medium text-white hover:text-gray-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                      >
                        <span className="px-3 py-2">Upload files</span>
                        <input
                          id="financialDocuments"
                          name="financialDocuments"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                        />
                      </label>
                      <p className="pl-1 text-gray-400">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, ZIP up to 10MB</p>
                  </div>
                </div>
                {formData.financialDocuments && (
                  <p className="mt-2 text-sm text-gray-400">
                    File selected: {formData.financialDocuments.name}
                  </p>
                )}
              </motion.div>

              {/* Description Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label htmlFor="description" className="block text-lg font-medium text-gray-300 mb-2 flex items-center">
                  <FaFileAlt className="mr-2 text-primary" /> Company Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full px-4 py-3 text-black bg-gray-200 border border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary rounded-md placeholder-gray-500"
                  required
                  placeholder="Describe your company"
                ></textarea>
              </motion.div>

              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <button
                  type="submit"
                  className="w-full md:w-1/2 py-4 px-6 text-lg font-bold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition duration-300 ease-in-out"
                >
                  List Company
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}

