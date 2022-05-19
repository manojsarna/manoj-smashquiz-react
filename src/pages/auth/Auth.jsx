import { useState } from "react";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./auth.css";
import { Login, SignUp } from "./components";

export function Auth() {
  useDocTitle("Auth - SmashQuiz - Manoj Sarna");
  const [authVal, setAuthVal] = useState(true);

  return (
    <main className="sm-main-auth">
      {authVal ? (
        <Login setAuthVal={setAuthVal} />
      ) : (
        <SignUp setAuthVal={setAuthVal} />
      )}
    </main>
  );
}
