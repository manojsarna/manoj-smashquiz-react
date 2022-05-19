import "./categorycard.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CategoryCard({ category, images }) {
  const [imgSrc, setImgSrc] = useState(images[0]);

  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i > images.length - 1) i = 0;
      setImgSrc(() => images[i]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Link to={`/categories/${category.category}`}>
      <div className="sm-main-cat-child sm-box-shad-hov">
        <img src={imgSrc} alt="badminton" />
        <div className="sm-man-cat-text sm-grid-text">
          <span>{category.categoryName}</span>
        </div>
      </div>
    </Link>
  );
}
