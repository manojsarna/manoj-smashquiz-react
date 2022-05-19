import { Link } from "react-router-dom";

export function HomeIcon() {
  return (
    <Link to="/" title="Go To Home">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-home"></i>
        </div>
      </button>
    </Link>
  );
}
