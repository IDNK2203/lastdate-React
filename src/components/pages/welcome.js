import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__heading">
        <h2 className="welcome__headline">
          {" "}
          Welcome to <span> Last Date</span>{" "}
        </h2>
      </div>
      <div className="welcome__auth ">
        <Link to="/register" className="welcome__signup LinkBtn--primary">
          Sign up
        </Link>
        <Link to="/login" className="welcome__login LinkBtn--primary">
          Login in
        </Link>
      </div>
      <div className="welcome__footNote">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          molestiae at et illum, itaque voluptates earum dolore sed. Asperiores
          fugit mollitia non. Recusandae cupiditate aut exercitationem
          perferendis cumque asperiores ea.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
