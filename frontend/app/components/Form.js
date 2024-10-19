// ./frontend/app/components/Form.js

"use client";

import { useState } from "react";
import { headingFont } from "@/app/utils/fonts";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/subscribe-investor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);
    if (res.ok) {
      setIsSubmitted(true);
      setFormData({ email: "" });
    } else {
        setIsError(true);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className={`${headingFont.className} text-3xl mb-6 mx-auto text-center`}>
          Join Our Waitlist
        </h2>
        <form className="shadow-md max-w-2xl p-8 mx-auto" onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <div className="relative w-full">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 bg-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="ml-4 bg-primary py-2 px-8 flex items-center group"
            >
              {isSubmitting ? "Sending..." : "Send"}
              <FaArrowRight className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {isSubmitted && (
            <p className="text-green-600 mt-4">Thank you for joining our waitlist!</p>
          )}
           {isError && (
            <p className="text-red-600 mt-4">There is something wrong, please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
