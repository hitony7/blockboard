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
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary shadow-xl px-10 py-12">
            <h1 className="text-4xl font-light text-white mb-4 text-center">
              Create a New Proposal
            </h1>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label className="block text-lg font-medium text-white mb-3">
                  Question
                </label>
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 border border-primary bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What's your question?"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-white mb-3">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 border border-primary bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Provide more details about your question"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-lg font-medium text-white mb-3">
                  Poll Options
                </label>
                {pollOptions.map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    value={option}
                    onChange={(e) => handlePollChange(index, e.target.value)}
                    className="mt-2 block w-full px-4 py-3 border border-primary bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                    placeholder={`Option ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-1/2 py-4 px-6 text-lg font-bold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Post Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}