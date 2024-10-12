"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const StartQuiz = () => {
    const router = useRouter();

    const handleStartQuiz = () => {
        router.push('/quiz');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-400">
            <h1 className="text-4xl mb-4">Welcome to the Quiz!</h1>
            <p className="mb-8 text-lg">Test your knowledge with our exciting quiz.</p>
            <button
                onClick={handleStartQuiz}
                className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded text-xl"
            >
                Start Quiz
            </button>
        </div>
    );
};

export default StartQuiz;
