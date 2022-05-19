import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AuthIcon, BarsIcon, LightDarkIcon } from "./icons";
import { Logo } from "./logo/Logo";
import { Search } from "./search/Search";

export function Header() {
  const currentPath = useLocation();

  const [showMobileIcons, setShowMobileIcons] = useState(false);
  return (
    <header className="sm-header">
      <nav className="sm-nav-new">
        <Logo />

        {currentPath.pathname === currentPath.pathname ? (
          <Search searchMob={false} />
        ) : (
          <div className="sm-extra-div"></div>
        )}
        {/* <!-- ICONS BUTTONS FOR CTA --> */}

        <div className="sm-nav-icon-mobile-icons">
          {currentPath.pathname === "/products" && <FilterIcon />}
          <BarsIcon setShowMobileIcons={setShowMobileIcons} />
        </div>
        <div
          className={`sm-action-icon-btn-wrapper ${
            showMobileIcons && "sm-icons-show"
          }`}
        >
          <LightDarkIcon />

          <AuthIcon />
        </div>
      </nav>
      {currentPath.pathname === currentPath.pathname && (
        <Search searchMob={true} />
      )}
    </header>
  );
}
