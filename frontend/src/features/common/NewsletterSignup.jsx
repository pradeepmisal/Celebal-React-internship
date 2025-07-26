import React, { useState } from "react";
import Title from "../common/Title";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address"
      });
      return;
    }

    // TODO: Implement newsletter signup API call
    setStatus({
      type: "success",
      message: "Thank you for subscribing to our newsletter!"
    });
    setEmail("");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Title text1={"STAY"} text2={"UPDATED"} />
          
          <p className="mt-4 text-gray-600">
            Subscribe to our newsletter for exclusive offers, new arrivals, and fashion inspiration.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 w-full sm:w-96 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>

          {status.message && (
            <p className={`mt-4 text-sm ${
              status.type === "error" ? "text-red-600" : "text-green-600"
            }`}>
              {status.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
