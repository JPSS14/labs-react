import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <div className="logo">
            <img
              className="logo__img"
              src="manchester-city.png"
              alt="Logo Manchester City"
              title="Logo Manchester City"
            />
          </div>
        </Link>
        <div className="header__separator"></div>
      </nav>
    </header>
  );
};
