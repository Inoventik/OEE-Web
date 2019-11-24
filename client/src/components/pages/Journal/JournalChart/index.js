import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
var Chart = require("chart.js");
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  chart: {
    padding: theme.spacing(2)
  }
});

class JournalChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [
          {
            label: "Machine 1",
            data: [1, 10, 15, 8, 5, 14],
            // backgroundColor: ["rgba(255, 99, 132, 0.8)"]
            borderColor: ["rgba(255, 0, 0, 0.5)"],
            lineTension: 0,
            fill: false
          },
          {
            label: "Machine 2",
            data: [10, 5, 12, 19, 10, 5],
            // backgroundColor: ["rgba(54, 162, 235, 0.8)"]
            borderColor: ["rgba(0, 0, 255, 0.5)"],
            lineTension: 0,
            fill: false
          }
        ]
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.chart}>
        <Typography variant="subtitle2" gutterBottom>
          Downtime Trend by Machines
        </Typography>
        <div>
          <canvas
            style={{ width: 800, height: 300 }}
            ref={node => (this.node = node)}
          />
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(JournalChart);
