import React from "react";
import { CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "50vh",
  },
  mediaText: {
    color: "white",
    textAlign: "center",
    padding: 120,
    fontSize: 50,
  },
}));

const HomeBanner = () => {
  const classes = useStyles();
  return (
    <div>
      <CardMedia
        className={classes.media}
        image={
          "https://3.bp.blogspot.com/-yG9tA0K97zw/XEXGSXCiZgI/AAAAAAAABBE/6UAvajBtEY8_hNPxosnCaQRugMnAPvDwQCKgBGAs/w3840-h1080-p-k-no-nu/cristiano-ronaldo-73-4k.jpg"
        }
      >
          <Typography className={classes.mediaText}>Sports Media</Typography>
      </CardMedia>
    </div>
  );
};

export default HomeBanner;