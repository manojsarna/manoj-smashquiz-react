import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Header, PrivateRoute, RestrictedRoute } from "./components";
import MockAPI from "./Mockman";
import { Auth, Category, Home, Page404, Quiz, Result, User } from "./pages";
import { verify } from "./redux/reducers/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verify());
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryName" element={<Category />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/mockman" element={<MockAPI />} />

        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
      <ToastContainer
        theme="colored"
        autoClose={1500}
        position={"top-right"}
        className={"toast-container"}
      />
      <Footer />
    </>
  );
}

export default App;
