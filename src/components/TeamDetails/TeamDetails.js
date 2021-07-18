import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamDetailContent from "../TeamDetailContent/TeamDetailContent";
import TeamDetailsBanner from "../TeamDetailsBanner/TeamDetailsBanner";

const TeamDetails = () => {
  const { teamId } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [teamId]);
  const { strTeamBadge } = team;
  return (
    <div>
      <TeamDetailsBanner teamLogo={strTeamBadge}></TeamDetailsBanner>
      <div style={{ backgroundColor: "#09113e" }}>
        <TeamDetailContent teamDetail={team}></TeamDetailContent>
      </div>
    </div>
  );
};

export default TeamDetails;
