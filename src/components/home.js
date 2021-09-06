import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home__heading">
        <h2 className="home__headline">
          {" "}
          Welcome to <span> Last Date</span>{" "}
        </h2>
      </div>
      <div className="home__auth">
        <Link to="/register" className="home__signup">
          Sign up
        </Link>
        <Link to="/login" className="home__login">
          Login in
        </Link>
      </div>
      <div className="home__footNote">
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

export default Home;
