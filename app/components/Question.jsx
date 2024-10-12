const Question = ({
  question,
  onAnswer,
  selectedAnswer,
  correctAnswer,
  submitted,
}) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-100">
        {question.QuesNo} {question.question}
      </h1>
      <ul className="flex flex-col my-4 space-y-3">
        {question.answers.map((answer) => (
          <li key={answer}>
            <button
              onClick={() => onAnswer(answer)}
              className={`flex items-center p-3 text-base font-bold rounded-lg w-full text-left my-2 ${
                submitted && answer === correctAnswer
                  ? "bg-green-600 text-white" // Highlight correct answer after submission
                  : submitted && selectedAnswer === answer
                  ? "bg-red-600 text-white" // Highlight incorrect answer after submission
                  : selectedAnswer === answer
                  ? "bg-blue-600 text-white" // Highlight selected answer
                  : "bg-gray-700 text-gray-100" // Default background
              } hover:bg-blue-500 group hover:shadow`}
            >
              <span className="flex-1 ms-3 whitespace-nowrap">{answer}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
