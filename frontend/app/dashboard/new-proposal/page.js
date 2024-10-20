"use client";

import DashboardLayout from "@/layout/DashboardLayout";
import { useState } from "react";

export default function ForumPage() {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [pollOptions, setPollOptions] = useState(["", "", "", ""]);

  const handlePollChange = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index] = value;
    setPollOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    console.log({ question, description, pollOptions });
  };

  return (
    <DashboardLayout>
      <div className="my-8 flex items-center justify-center">
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">
            Create a New Proposal
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Question
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="mt-2 block w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                placeholder="What's your question?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 block w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Provide more details about your question"
                rows="5"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">
                Poll Options
              </label>
              {pollOptions.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  value={option}
                  onChange={(e) => handlePollChange(index, e.target.value)}
                  className="mt-2 block w-full p-3 border border-gray-700 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 mb-3"
                  placeholder={`Option ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-1/2 py-4 px-6 text-xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Post Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}