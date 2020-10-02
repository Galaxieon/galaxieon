import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <div className="main">
            <div className="container">
                <div className="todoapp">
                    <h2>Todo App</h2>
                    <h3>What is Todo/ Todo List?</h3>
                    <p>
                        ToDoList is software in the category of Task Management,
                        Project Management, Productivity, “Getting Things Done”
                        (GTD), Scheduling, and Collaboration. We have a lot of
                        choices to help us keep track of daily obligations. A
                        simple list on paper of things “To Do” is enough for
                        some people.
                    </p>
                    <div className="link">
                        <Link to="/Todo-App">Explore</Link>
                    </div>
                </div>
                <div className="quizapp">
                    <h2>Quiz App</h2>
                    <h3>Static Quiz App</h3>
                    <h3>Random 7 Questions</h3>
                    <h3>NB: This App is not stable and Under Developing</h3>
                    <div className="link">
                        <Link to="/Quiz-App">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
