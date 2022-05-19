import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

export function AuthIcon() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  return user ? (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary sm-header-nav-user-avatar"
      title={user ? "Go To User Profile" : "Go To Login"}
      onClick={() => navigate("/user")}
    >
      <div className="avatar avatar-hover avatar-text bg-2 s-xs">
        <h4>
          {`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}
        </h4>
      </div>
    </button>
  ) : (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      title={user ? "Go To User Profile" : "Go To Login"}
      onClick={() => navigate("/auth")}
    >
      <div className="icon">
        <i className="fas fa-sign-in-alt icon-in-btn"></i>
      </div>
    </button>
  );
}
