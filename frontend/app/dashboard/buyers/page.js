'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Buyer() {
  const router = useRouter(); // Initialize the router hook

  const [formData, setFormData] = useState({
    category: '',
    price: '',
    revenue: '',
    revenueMultiple: '',
    ttmRevenue: '',
    profit: '',
    customPrice: '',
    customRevenue: '',
    customTTMRevenue: '',
    customProfit: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    // Redirect to the company page
    router.push('/companypage');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 shadow-xl rounded-lg px-10 py-12">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Discover Your Next Investment
          </h2>
          <p className="text-lg text-gray-300 mb-10 text-center">
            Filter companies based on your investment criteria and find the perfect match.
          </p>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Category Selection */}
              <div>
                <label htmlFor="category" className="block text-lg font-medium text-white mb-3">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Categories</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Price Selection */}
              <div>
                <label htmlFor="price" className="block text-lg font-medium text-white mb-3">
                  Price
                </label>
                <select
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Any Price</option>
                  <option value="0-100000">$0 - $100,000</option>
                  <option value="100000-500000">$100,000 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000+">$1,000,000+</option>
                  <option value="custom">Custom</option>
                </select>
                {formData.price === 'custom' && (
                  <input
                    type="text"
                    name="customPrice"
                    value={formData.customPrice}
                    onChange={handleChange}
                    placeholder="Enter custom price"
                    className="mt-2 block w-full px-4 py-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>

              {/* Other form fields */}
              {/* (Rest of the form fields can go here) */}

            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-1/2 py-4 px-6 text-xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search Companies
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
