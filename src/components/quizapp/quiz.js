import React, { useRef, useState } from "react";
import "./quizapp.css";
export default function Quiz() {
    const [count, setCount] = useState(0);
    const [qns] = useState([
        {
            id: 1,
            q: "Grand Central Terminal, Park Avenue, New York is the world's",
            answerOptions: [
                { answerText: "Largest Railway Station", isCorrect: true },
                { answerText: "Highest railway station", isCorrect: false },
                { answerText: "Longest railway station", isCorrect: false },
                { answerText: "None of Above", isCorrect: false },
            ],
        },
        {
            id: 2,
            q: "Entomology is the science that studies",
            answerOptions: [
                { answerText: "Behavior of human beings", isCorrect: false },
                { answerText: "Insects", isCorrect: true },
                {
                    answerText:
                        "The origin and history of technical and scientific terms",
                    isCorrect: false,
                },
                { answerText: "The formation of rocks", isCorrect: false },
            ],
        },
        {
            id: 3,
            q:
                "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
            answerOptions: [
                { answerText: "Asia", isCorrect: false },
                { answerText: "Africa", isCorrect: true },
                { answerText: "Europe", isCorrect: false },
                { answerText: "Australia", isCorrect: false },
            ],
        },
        {
            id: 4,
            q: "What is the capital of France?",
            answerOptions: [
                { answerText: "New York", isCorrect: false },
                { answerText: "London", isCorrect: false },
                { answerText: "Paris", isCorrect: true },
                { answerText: "Dublin", isCorrect: false },
            ],
        },
        {
            id: 5,
            q: "Who is CEO of Tesla?",
            answerOptions: [
                { answerText: "Jeff Bezos", isCorrect: false },
                { answerText: "Elon Musk", isCorrect: true },
                { answerText: "Bill Gates", isCorrect: false },
                { answerText: "Tony Stark", isCorrect: false },
            ],
        },
        {
            id: 6,
            q: "The iPhone was created by which company?",
            answerOptions: [
                { answerText: "Apple", isCorrect: true },
                { answerText: "Intel", isCorrect: false },
                { answerText: "Amazon", isCorrect: false },
                { answerText: "Microsoft", isCorrect: false },
            ],
        },
        {
            id: 7,
            q: "How many Harry Potter books are there?",
            answerOptions: [
                { answerText: "1", isCorrect: false },
                { answerText: "4", isCorrect: false },
                { answerText: "6", isCorrect: false },
                { answerText: "7", isCorrect: true },
            ],
        },
    ]);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const questionNo = useRef();
    const maxQuestion = useRef();
    const optionSec = useRef();
    const question = useRef();
    var qno = 0;
    const answers = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        qno = count + 1;
        if (qno < qns.length) {
            setCount(qno);
        } else {
            setShowScore(true);
            questionNo.current.style.visibility = "hidden";
            maxQuestion.current.style.visibility = "hidden";
        }
        if (qno % 2 === 0) {
            optionSec.current.classList.toggle("active");
            question.current.classList.toggle("active");
            optionSec.current.classList.remove("set");
            question.current.classList.remove("set");
        } else {
            optionSec.current.classList.toggle("set");
            question.current.classList.toggle("set");
            optionSec.current.classList.remove("active");
            question.current.classList.remove("active");
        }
    };
    return (
        <div className="quiz">
            <div className="quiz-container">
                <div className="head-section">
                    <div ref={questionNo} className="nos">
                        <span>{qns[count].id}</span>
                    </div>
                    <h1>QUIZ</h1>
                    <div ref={maxQuestion} className="nos">
                        <span>{qns.length}</span>
                    </div>
                </div>
                {showScore ? (
                    <div className="score-section">
                        <h1>YOUR SCORE</h1>
                        <div className="nos">
                            <span> {score} </span>
                        </div>
                        <h2>OUT OF</h2>
                        <div className="nos">
                            <span>{qns.length}</span>
                        </div>
                    </div>
                ) : (
                    <div className="qns-conatiner">
                        <p ref={question}>{qns[count].q}</p>
                        <div ref={optionSec} className="options-section">
                            {qns[count].answerOptions.map(
                                (answerOption, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            answers(answerOption.isCorrect)
                                        }
                                        className="option-content"
                                    >
                                        {answerOption.answerText}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
