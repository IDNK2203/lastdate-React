import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/home">
            <HomeIcon fontSize="medium"></HomeIcon>
          </Link>
        </li>
        <li className="nav__link">
          <Link to="/match">
            <FavoriteTwoToneIcon fontSize="medium"></FavoriteTwoToneIcon>
          </Link>
        </li>
        <li className="nav__link">
          <Link to="/me">
            <AccountBoxIcon fontSize="medium"></AccountBoxIcon>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
