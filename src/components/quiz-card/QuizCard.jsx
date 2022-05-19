import { Link } from "react-router-dom";
import "./quizcard.css";
export function QuizCard({ quiz }) {
  return (
    <Link to={`/quiz/${quiz._id}`} className="sm-quiz-link">
      <div className="sm-quiz-card-container">
        <div className="sm-quiz-card-img">
          <img src={quiz.image} alt="tvshow" />
          <div className="sm-quiz-card-title sm-grid-text">
            <span>{quiz.title}</span>
          </div>
        </div>
        <div className="sm-quiz-card-content">
          <h1 className="sm-quiz-card-subtitle">{quiz.subtitle}</h1>
        </div>
      </div>
    </Link>
  );
}
