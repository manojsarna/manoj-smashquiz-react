import { useState } from "react";
import { Questions } from "./Questions";
import "./quiz.css";
import { Rules } from "./Rules";
export function Quiz() {
  const [showRules, setShowRules] = useState(true);
  return showRules ? (
    <Rules showRules={showRules} setShowRules={setShowRules} />
  ) : (
    <Questions />
  );
}
