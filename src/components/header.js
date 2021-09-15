import { Link } from "react-router-dom";
import matchUser from "../images/matchUser-1.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo-holder">
          <span> Last Date</span>
        </div>
        <div className="header__profile-img-holder">
          <Link to="/me" className="header__profile-img-link">
            <img src={matchUser} alt="user profile " />
          </Link>
        </div>
      </div>
    </header>
  );
}
