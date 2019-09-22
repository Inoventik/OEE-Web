import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Notifications from "./Notifications";
import DowntimeReports from "./DowntimeReports";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
  // container: {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   height: "89vh"
  // },
  // top: {
  //   flexGrow: 2,
  //   display: "flex",
  //   backgroundColor: "#e8e8e8",
  //   width: "100%",
  //   height: "50%",

  //   // temp
  //   outlineStyle: "solid",
  //   outlineColor: "red",
  //   outlineWidth: "thin",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // left: {
  //   flexGrow: 1,
  //   display: "flex",
  //   backgroundColor: "#e8e8e8",
  //   height: "50%",

  //   // temp
  //   outlineStyle: "solid",
  //   outlineColor: "red",
  //   outlineWidth: "thin",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // right: {
  //   display: "flex",
  //   flexDirection: "column",
  //   flexGrow: 1,
  //   // display: "flex",
  //   backgroundColor: "#e8e8e8",
  //   height: "50%",

  //   // temp
  //   outlineStyle: "solid",
  //   outlineColor: "red",
  //   outlineWidth: "thin",
  //   alignItems: "center",
  //   justifyContent: "center"
  // }
  root: {
    flexGrow: 1
  },
  notifications: {
    padding: theme.spacing(2)
    // height: 140,
    // width: 100
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      // <div className={classes.container}>
      //   <div className={classes.top}>TOP</div>
      //   <div className={classes.left}>LEFT</div>
      //   <div className={classes.right}>
      //     <Notifications></Notifications>
      //     <Notifications></Notifications>
      //   </div>
      // </div>
      <div>
        <Grid container justify="flex-start" spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.notifications} />
          </Grid>
        </Grid>

        <Grid container justify="flex-start" spacing={2}>
          <Grid item xs={4}>
            <Paper className={classes.notifications} />
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.notifications}>
              <Typography variant="subtitle2" gutterBottom>
                Summary
              </Typography>
              <Notifications></Notifications>
              <br></br>
              <Typography variant="subtitle2" gutterBottom>
                Downtime Reports
              </Typography>
              <DowntimeReports></DowntimeReports>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
