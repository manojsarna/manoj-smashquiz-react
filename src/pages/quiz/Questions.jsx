import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getQuiz } from "../../redux/reducers/categorySlice";
import { InfinitySpin as Loader } from "react-loader-spinner";
import "./questions.css";
import { toast } from "react-toastify";
export function Questions() {
  const navigate = useNavigate();

  const { quizId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (quizId) {
      dispatch(getQuiz(quizId));
    }
  }, []);

  const [quesNo, setQuesNo] = useState(0);
  const [score, setScore] = useState(0);
  const [userAns, setUserAns] = useState("");

  const { loading, quiz } = useSelector((state) => state.category);

  return !quiz ? (
    <div className="sm-react-loader-spinner">
      <Loader />
    </div>
  ) : (
    <main className="sm-main">
      <div className="mcq-container">
        <div className="sm-quiz-title-subtitle">
          <h1 className="sm-main-subtitle">
            <span>{quiz?.title} : </span>
            <span>{quiz?.subtitle}</span>
          </h1>
        </div>

        <div className="sm-main-ques">
          <div className="sm-main-question-container">
            <div className="sm-main-question-header">
              <button
                className="btn btn-end-quiz"
                onClick={() => {
                  navigate("/");
                  toast.success("Back To Home");
                }}
              >
                Quit Quiz
              </button>
              <button
                className="btn btn-bold btn-end-quiz btn-next-ques"
                onClick={() => {
                  if (quesNo + 1 === quiz.mcqs.length) {
                    navigate("/result", { state: { quiz, score } });
                  } else {
                    setQuesNo((quesNo) => quesNo + 1);
                  }
                  setUserAns("");
                }}
              >
                Next <i className="icon-btn-right fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="sm-main-question-header">
              <h4>
                Question :{" "}
                <span className="fw-900">
                  {quesNo + 1} / {quiz?.mcqs?.length}
                </span>
              </h4>
              <h4>
                Score : <span className="fw-900">{score}</span>
              </h4>
            </div>
            <div className="sm-quiz-question">
              <h4 className="fw-800">{quiz.mcqs[quesNo].question}</h4>
              {quiz.mcqs[quesNo].options.map((option) => (
                <button
                  className={`sm-quiz-btn btn ${
                    userAns &&
                    (quiz.mcqs[quesNo].answer === option
                      ? "sm-quiz-right-ans"
                      : userAns === option && "sm-quiz-wrong-ans")
                  }`}
                  key={option}
                  onClick={() => {
                    if (!userAns) {
                      setUserAns(option);
                      if (quiz.mcqs[quesNo].answer === option) {
                        setScore((score) => score + 2);
                      }
                    }
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
