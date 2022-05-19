import { AuthIcon, HomeIcon, LightDarkIcon } from "../header/icons";
import "./footer.css";

export function Footer() {
  return (
    <>
      <footer className="sm-footer">
        <h4>
          Made with ❤️ by <strong>Manoj Sarna</strong>
        </h4>
        <div className="sm-footer-social">
          <a
            href="https://twitter.com/manojsarnacom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social-show"
            title="Twitter"
          >
            <i className="btn-social fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/manojsarna/manoj-smash-cart-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-social-show"
            title="GitHub"
          >
            <i className="btn-social fab fa-github"></i>
          </a>
        </div>
      </footer>
      <footer className="sm-footer-icons-mobile">
        <LightDarkIcon />
        <HomeIcon />
        <AuthIcon />
      </footer>
    </>
  );
}
