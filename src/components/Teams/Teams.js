import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    textAlign: "center",
    margin: "auto",
    marginTop: 50,
  },
  media: {
    height: 350,
  },
  btnStyle: {
    margin: 10,
    marginRight: 5,
  },
});

const Teams = (props) => {
  const classes = useStyles();
  const { strTeam, strSport, strTeamBadge, idTeam } = props.team;

  let history = useHistory();

  const handleDetail = () => {
    history.push(`/team/${idTeam}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={strTeamBadge}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {strTeam}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sports Type: {strSport}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        onClick={handleDetail}
        className={classes.btnStyle}
        variant="contained"
        color="secondary"
      >
        Explore
        <ArrowForwardIcon />
      </Button>
    </Card>
  );
};

export default Teams;
