import React, { useEffect, useState } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Teams from "../Teams/Teams";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div>
      <HomeBanner></HomeBanner>
      {
          teams.map(tm => <Teams key={tm.idTeam} team = {tm}></Teams>)
      }
    </div>
  );
};

export default Home;
