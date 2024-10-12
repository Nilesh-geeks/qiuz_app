"use client";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-400">
      <h1 className="text-5xl mb-4">Welcome to Knowvation Learnings!</h1>
      <p className="mb-8 text-lg">
        Test your knowledge with our exciting quiz.
      </p>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded text-xl">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded text-xl">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
