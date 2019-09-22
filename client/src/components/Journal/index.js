import React, { Component } from "react";
import JournalActions from "./JournalActions";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MaterialTable from "material-table";
import { withStyles } from "@material-ui/core";
import "./styles.css";
import JournalChart from "./JournalChart";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

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
        { title: "Log Time", field: "logtime" },
        { title: "Reason", field: "reason" }
      ],
      data: [
        { logtime: "01/07/2019  6:00:00 AM", reason: "Breakdown Type 1" },
        { logtime: "01/07/2019  7:00:00 AM", reason: "" },
        { logtime: "01/07/2019  8:00:00 AM", reason: "" },
        { logtime: "01/07/2019  9:00:00 AM", reason: "" },
        { logtime: "01/07/2019  10:00:00 AM", reason: "" },
        { logtime: "01/07/2019  11:00:00 AM", reason: "" },
        { logtime: "01/07/2019  12:00:00 PM", reason: "" },
        { logtime: "01/07/2019  1:00:00 PM", reason: "" }
      ],
      downtimeReason: ""
    };

    this.changeDate = this.changeDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
          direction="row-reverse"
          // alignItems="center"
        >
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle2" gutterBottom>
                Filter
              </Typography>

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">
                  Work Calendar
                </InputLabel>
                <Select
                  // value={values.age}
                  // onChange={handleChange}
                  labelWidth={10}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Machine</InputLabel>
                <Select
                  // value={values.age}
                  // onChange={handleChange}
                  labelWidth={10}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">
                  Work Shift
                </InputLabel>
                <Select
                  // value={values.age}
                  // onChange={handleChange}
                  labelWidth={10}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
            </Paper>
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
