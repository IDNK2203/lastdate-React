import Header from "../header";
import Nav from "../nav";
import MatchList from "../matchList";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Header></Header>
        <main className="home__main">
          <h1 className="home__title">Home</h1>
          <MatchList></MatchList>
        </main>
        <Nav></Nav>
      </div>
    </div>
  );
}
