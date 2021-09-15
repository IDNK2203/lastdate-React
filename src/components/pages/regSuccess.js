import { Link } from "react-router-dom";
import regSucessImg from "../../images/reg-success.png";

function RegSuccess() {
  return (
    <div className="regSuccess">
      <h1>Your Profile has been approved</h1>
      <div className=" regSuccess__content">
        <div className="imgHolder">
          <img src={regSucessImg} alt="blue tick" />
        </div>
        <div className="box">
          <Link to="/home" className="LinkBtn--primary">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegSuccess;
