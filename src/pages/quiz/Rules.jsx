import { useNavigate } from "react-router-dom";
import "./rules.css";
export function Rules() {
  const navigate = useNavigate();
  return (
    <main className="sm-main">
      <div className="sm-main-rules">
        <h1 className="rules-heading">Rules</h1>
        <ol className="sm-main-rules-container">
          <li>This quiz consists of 5 multiple-choice questions.</li>
          <li>Time alotted for the quiz : 5 minutes.</li>
          <li>Points will be awarded : 2 points for each right answer.</li>
          <li>Each multiple choice question has only one correct answer.</li>
          <li>
            To start, click the Start Quiz button. When finished, click the
            Submit button.
          </li>
        </ol>
        <div className="sm-rules-cta-container">
          <button
            className="btn btn-primary btn-bolder btn-start-quiz go-back-btn "
            onClick={() => navigate("/")}
          >
            <i className="icon-btn-left fas fa-chevron-left"></i>
            Go Back
          </button>
          <button className="btn btn-primary btn-bolder btn-start-quiz">
            Start Quiz
            <i className="icon-btn-right fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
}
