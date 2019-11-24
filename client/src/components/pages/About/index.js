import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  menu: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e8e8e8",
    width: "200px"
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.menu}>
        <Button variant="contained" className={classes.button}>
          Dashboard
        </Button>
        <Button variant="contained" className={classes.button}>
          Charts
        </Button>
        <Button variant="contained" className={classes.button}>
          Journal
        </Button>
        <Button variant="contained" className={classes.button}>
          Calendar
        </Button>
        <Button variant="contained" className={classes.button}>
          Admin
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(About);
