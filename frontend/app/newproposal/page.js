// app/newproposal/page.js

"use client";

import { useState } from 'react';

export default function ForumPage() {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '', '', '']);

  const handlePollChange = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index] = value;
    setPollOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send to backend or display results)
    console.log({ question, description, pollOptions });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-white">Create a New Proposal</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Question</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              placeholder="What's your question?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Provide more details about your question"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Poll Options </label>
            {pollOptions.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handlePollChange(index, e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 mb-2"
                placeholder={`Option ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Post Question
          </button>
        </form>
      </div>
    </div>
  );
}
