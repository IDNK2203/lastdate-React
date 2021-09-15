import { useState } from "react";
import matchUser from "../images/matchUser.jpg";
import MatchCard from "./matchCard";

export default function MatchList() {
  const returnedData = [
    {
      image: matchUser,
      id: 0,
      age: 20,
      city: "New York",
      name: "Micheal Jordan",
    },
    {
      image: matchUser,
      id: 1,
      age: 20,
      city: "New York",
      name: "Lebron James",
    },
    {
      image: matchUser,
      age: 20,
      id: 2,
      city: "New York",
      name: "Step Curry",
    },
    {
      image: matchUser,
      age: 20,
      id: 3,
      city: "New York",
      name: "Kyrin Ivrn",
    },
    {
      image: matchUser,
      id: 4,
      age: 20,
      city: "New York",
      name: "Kobe Bryant",
    },
  ];
  const [data, setData] = useState(returnedData);
  // create match data state

  return (
    <div className="home__match-list">
      {data ? (
        data.map((match) => {
          return (
            <MatchCard
              match={match}
              data={data}
              setData={setData}
              key={match.id}
            ></MatchCard>
          );
        })
      ) : (
        <h2> no data availabel</h2>
      )}
    </div>
  );
}
//
