import { Link } from "react-router-dom";
import "./MainMenuItem.scss";

export const MainMenuItem = () => {
  return (
    <Link to="/project-city">
      <button className="mainMenuItem">Project City</button>
    </Link>
  );
};
