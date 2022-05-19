import { useDocTitle } from "../../hooks/useDocTitle";
import "./home.css";
import images from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllQuizzes,
  getCategories,
} from "../../redux/reducers/categorySlice";
import { InfinitySpin as Loader } from "react-loader-spinner";
import { CategoryCard, QuizCard } from "../../components";
export function Home() {
  useDocTitle("Home - SmashQuiz - Manoj Sarna");
  const { categories, allQuizzes, loading } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
    if (allQuizzes.length === 0) {
      dispatch(getAllQuizzes());
    }
  }, []);

  return loading ? (
    <div className="sm-react-loader-spinner">
      <Loader />
    </div>
  ) : (
    <main className="sm-main">
      <div className="sm-main-categories">
        <h2>Featured Categories</h2>
        <div className="sm-main-cat-container">
          {categories.map((item) => (
            <CategoryCard
              key={item._id}
              category={item}
              images={Object.values(images[item.category])}
            />
          ))}
        </div>
        <div className="sm-main-feature-p">
          <h2 className="prod-heading">Top Picks</h2>
          <div className="sm-main-prod-container">
            {allQuizzes
              .filter((item) => item.trending)
              .map((quiz) => (
                <QuizCard key={quiz._id} quiz={quiz} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
