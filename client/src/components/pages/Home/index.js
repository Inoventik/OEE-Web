import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Notifications from "./Notifications";
import DowntimeReports from "./DowntimeReports";
import SendMessage from "./SendMessage";
import TaskList from "./TaskList";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  notifications: {
    padding: theme.spacing(2)
  },
  button: {
    // display: "flex"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  message: {
    width: "100%"
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container justify="flex-start" spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.notifications} />
          </Grid>
        </Grid>

        <Grid container justify="flex-start" spacing={2}>
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
          <Grid item xs={4}>
            <SendMessage></SendMessage>
          </Grid>
        </Grid>
        <Grid container justify="flex-start" spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.notifications}>
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.message}
              >
                Task List
              </Typography>
              <TaskList/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
