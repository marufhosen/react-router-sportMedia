import React from "react";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "50vh",
  },
}));

const TeamDetailsBanner = (props) => {
  const classes = useStyles();
  return (
    <div>
      <CardMedia
        className={classes.media}
        image={
          "https://wallpapercave.com/wp/wp2022767.jpg"
        }
      >
        <div style={{ textAlign: "center", padding: 80 }}>
          <img src={props.teamLogo} width="150" alt="" />
        </div>
      </CardMedia>
    </div>
  );
};

export default TeamDetailsBanner;
