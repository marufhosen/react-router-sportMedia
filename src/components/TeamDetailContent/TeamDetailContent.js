import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import FlagIcon from "@material-ui/icons/Flag";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import WcIcon from "@material-ui/icons/Wc";
import RoomIcon from "@material-ui/icons/Room";
import { Divider } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "auto",
  },
  gridStyle: {
    backgroundColor: "#206bff",
    color: "white",
    marginTop: 50,
    borderRadius: 8,
  },
}));

const TeamDetailContent = (props) => {
  const {
    strAlternate,
    intFormedYear,
    strSport,
    strGender,
    strCountry,
    strTeamFanart4,
    strDescriptionEN,
  } = props.teamDetail;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={6} className={classes.gridStyle}>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography style={{ marginBottom: 10 }} variant="h4">
                {strAlternate}
              </Typography>
              <Typography>
                <RoomIcon />
                Founded: {intFormedYear}
              </Typography>
              <Typography>
                <FlagIcon />
                Country: {strCountry}
              </Typography>
              <Typography>
                <SportsSoccerIcon />
                Sport Type: {strSport}
              </Typography>
              <Typography>
                <WcIcon />
                Gender: {strGender}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={strTeamFanart4} width="100%" alt="" />
          </Grid>
        </Grid>

        <div>
          <p style={{ marginTop: 40, color: "white" }}>{strDescriptionEN}</p>
        </div>
        <Divider></Divider>
        <div style={{ textAlign: "center" }}>
          <IconButton
            aria-label="Linkdib"
            color="primary"
            href="https://www.linkedin.com/in/maruf-hosen-239028179/?fbclid=IwAR0boQbUTIJJMrtEVVcKGS5qu0fHh2B3ZG0HTYCHz28UZc6uWJv7YXT95Xk"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="gitHub"
            color="secondary"
            href="https://github.com/marufhosen"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="fb"
            color="primary"
            href="https://web.facebook.com/marufmislam/"
          >
            <FacebookIcon />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default TeamDetailContent;
