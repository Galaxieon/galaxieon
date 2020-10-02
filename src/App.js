import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import Todoapp from "./components/Todo App/TodoApp";
import Quiz from "./components/quizapp/quiz";
import Footer from "./components/footer/footer";

export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/Todo-App/" component={Todoapp} />
                <Route path="/Quiz-App/" component={Quiz} />
                <Footer />
            </Router>
        </div>
    );
}
