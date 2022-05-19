import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./quizcard.css";
export function QuizCard({ quiz }) {
  return (
    <Link
      to={`/quiz/${quiz._id}`}
      className="sm-quiz-link"
      title={`Go To ${quiz.title} Quiz`}
    >
      <div className="sm-quiz-card-container">
        <div className="sm-quiz-card-img">
          <img src={quiz.image} alt="tvshow" />
          <div className="sm-quiz-card-title sm-grid-text">
            <span>{quiz.title}</span>
            <span
              className="sm-share-icon-conatiner"
              title={`Share This ${quiz.title} Quiz`}
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(
                  `https://smashquiz-react.netlify.app/quiz/${quiz._id}`
                );
                toast.success(`${quiz.title} Quiz Link Copied`);
              }}
            >
              <i className="fas fa-share"></i>
            </span>
          </div>
        </div>
        <div className="sm-quiz-card-content">
          <h1 className="sm-quiz-card-subtitle">{quiz.subtitle}</h1>
        </div>
      </div>
    </Link>
  );
}
