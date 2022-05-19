import { useDocTitle } from "../../hooks/useDocTitle";
import "./page404.css";
import animationData from "../../assets/lotties/42479-page-not-found-404.json";
import Lottie from "react-lottie";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function Page404() {
  useDocTitle("404 - SmashQuiz - Manoj Sarna");
  return (
    <main className="page404">
      <section className="page404-section">
        <Lottie options={defaultOptions} height={500} width={1200} />
      </section>
    </main>
  );
}
