import { useLocation, useNavigate } from "react-router-dom";
import "./result.css";
export function Result() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <main className="sm-main">
      <div className="sm-result-container">
        <div className="sm-quiz-result">
          <button
            className="btn btn-primary btn-bolder btn-start-quiz go-back-btn "
            onClick={() => {
              navigate("/");
              toast.success("Back To Home");
            }}
          >
            <i className="icon-btn-left fas fa-chevron-left"></i>
            Go Home
          </button>
          <h2 className="fw-800">
            <i className="fas fa-trophy"></i> Result :{" "}
            {`${state.score} / ${state.quiz.totalScore}`}
          </h2>
        </div>
        <h3 className="sm-main-subtitle">
          {`${state.quiz.title} : ${state.quiz.subtitle}`}
        </h3>
        {state.quiz.mcqs.map((ques, i) => (
          <div className="sm-main-ques" key={i}>
            <div className="sm-main-question-container">
              <div className="sm-main-question-header">
                <h4>
                  Question :{" "}
                  <span className="fw-900">{`${i + 1} / ${
                    state.quiz.mcqs.length
                  }`}</span>
                </h4>
              </div>
              <div className="sm-quiz-question">
                <h4>{ques.question}</h4>
                {ques.options.map((option) => (
                  <button
                    key={option}
                    className={`sm-quiz-btn btn btn-remove-styles ${
                      option === ques.answer && "sm-quiz-right-ans"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
