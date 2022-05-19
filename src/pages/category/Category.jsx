import { useDispatch, useSelector } from "react-redux";
import "./category.css";
import { InfinitySpin as Loader } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getCategories,
  getQuizzesInCategory,
} from "../../redux/reducers/categorySlice";
import { QuizCard } from "../../components";
export function Category() {
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  const { loading, categories, quizes } = useSelector(
    (state) => state.category
  );
  const category = categories.find((item) => item.category === categoryName);

  console.log(category, quizes);

  useEffect(() => {
    if (categoryName) {
      dispatch(getQuizzesInCategory(categoryName));
    }
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, []);

  return loading ? (
    <div className="sm-react-loader-spinner">
      <Loader />
    </div>
  ) : (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">{category?.categoryName}</h2>
        <div className="sm-main-prod-container">
          {quizes?.map((quiz) => (
            <QuizCard key={quiz._id} quiz={quiz} />
          ))}
        </div>
      </div>
    </main>
  );
}
