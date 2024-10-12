"use client";

import { useState, useEffect } from 'react';
import Question from '../components/Question';

const questions = [
    { QuesNo: "Q.1) ", question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: "4" },
    { QuesNo: "Q.2) ", question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris"], correct: "Paris" },
    // Add more questions as needed
];

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    alert('Time is up! Your score: ' + score);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleSubmit = () => {
        if (selectedAnswer !== null && !submitted) {
            setSubmitted(true);
            if (selectedAnswer === questions[currentQuestionIndex].correct) {
                setScore(score + 1);
            }
        }
    };

    const handleNext = () => {
        if (submitted) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setSubmitted(false);
        } else {
            alert('Please select an answer before proceeding.');
        }
    };

    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
                <h1 className="text-4xl font-bold mb-4">Your Score: {score}</h1>
                <a href="/" className="mt-4 inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded-lg text-base font-semibold">
                    Return to Home
                </a>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
            <div className="w-full max-w-md p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                    <h1 className="text-xl font-semibold text-gray-200">Quiz</h1>
                    <h2 className="text-md font-semibold text-gray-300">
                        Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
                    </h2>
                </div>
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    selectedAnswer={selectedAnswer}
                    correctAnswer={questions[currentQuestionIndex].correct}
                    submitted={submitted}
                />
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                        disabled={currentQuestionIndex === 0}
                        className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 disabled:opacity-50"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500"
                    >
                        Submit
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
