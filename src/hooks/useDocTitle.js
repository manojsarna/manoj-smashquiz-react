import { useEffect, useState } from "react";

export const useDocTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return [documentTitle, setDocumentTitle];
};
