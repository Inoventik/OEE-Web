import React, { Component } from "react";
import JournalActions from "./JournalActions";
import DowntimeJournalFilter from "./DowntimeJournalFilter";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MaterialTable from "material-table";
import { withStyles } from "@material-ui/core";
import "./styles.css";
import JournalChart from "./JournalChart";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 150
  }
});

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      columns: [
        { title: "line", field: "line" },
        { title: "dateval", field: "dateval" },
        { title: "hourval", field: "hourval" },
        { title: "Reason", field: "reason" }
      ],
      data: [],
      downtimeReason: ""
    };

    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/info")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            data: result
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  handleChange(event) {
    this.setState({
      downtimeReason: event.target.value
    });
  }

  changeDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { classes } = this.props;
    // const inputLabel = React.useRef(null);
    return (
      <div>
        <Grid container justify="center" spacing="1" alignItems="center">
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  autoOk
                  orientation="landscape"
                  variant="static"
                  openTo="date"
                  value={this.state.date}
                  onChange={this.changeDate}
                />
              </MuiPickersUtilsProvider>
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <JournalChart></JournalChart>
          </Grid>
        </Grid>

        <br></br>
        <Grid
          container
          justify="center"
          spacing="1"
          direction="row"
          // alignItems="center"
        >
          <Grid item xs={2}>
            <DowntimeJournalFilter></DowntimeJournalFilter>
          </Grid>
          <Grid item xs={10}>
            <MaterialTable
              title="Downtime Journal"
              columns={this.state.columns}
              data={this.state.data}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const data = [...this.state.data];
                      data.push(newData);
                      this.setState({ ...this.state, data });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const data = [...this.state.data];
                      data[data.indexOf(oldData)] = newData;
                      this.setState({ ...this.state, data });
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const data = [...this.state.data];
                      data.splice(data.indexOf(oldData), 1);
                      this.setState({ ...this.state, data });
                    }, 600);
                  })
              }}
            />
          </Grid>
        </Grid>

        <br></br>
        <JournalActions></JournalActions>
        <br></br>
      </div>
    );
  }
}

export default withStyles(styles)(Journal);
