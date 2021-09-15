import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearIcon from "@material-ui/icons/Clear";

export default function MatchCard({ match, data, setData }) {
  const handleClick = (e, matchId) => {
    const updatedData = data.filter((match) => matchId !== match.id);
    setData(updatedData);
  };

  const cssGradient =
    " linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),";
  return (
    <div className="matchCard" id={match.id}>
      <div
        className="matchCard__infoCard"
        style={{ backgroundImage: `${cssGradient} url(${match.image})` }}
      >
        <span className="matchCard__percent"> 75% Match</span>
        <div className="matchCard__userInfo">
          <h3>{match.name}</h3>
          <div className="matchCard__userInfo-CA">
            <p>{match.city}</p>
            <p>{match.age}</p>
          </div>
        </div>
      </div>
      <ul className="matchCard__actions">
        <li className="matchCard__action">
          <button
            className="matchCard__btn matchCard__btn--cancel"
            onClick={(e) => handleClick(e, match.id)}
          >
            <ClearIcon></ClearIcon>
          </button>
        </li>
        <li className="matchCard__action">
          <button className="matchCard__btn matchCard__btn--profile">
            <AccountCircleIcon></AccountCircleIcon>
          </button>
        </li>
        <li className="matchCard__action">
          <button className="matchCard__btn matchCard__btn--like">
            <FavoriteIcon></FavoriteIcon>
          </button>
        </li>
      </ul>
    </div>
  );
}
