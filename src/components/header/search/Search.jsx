import { useLocation } from "react-router-dom";

export function Search({ searchMob }) {
  const location = useLocation();

  return (
    <div className={`sm-nav-search${searchMob ? "-mobile" : ""}`}>
      {location.pathname === "/products" && (
        <div className="sm-input-container input-search">
          <input
            type="text"
            className="input-basic input-basic-icon"
            placeholder="Search..."
            name="search"
          />
          <i className="icon-basic fas fa-search"></i>
        </div>
      )}
    </div>
  );
}
