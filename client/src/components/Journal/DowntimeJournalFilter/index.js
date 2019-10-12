import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
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

class DowntimeJournalFilter extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Typography variant="subtitle2" gutterBottom>
          Filter
        </Typography>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-simple">Work Calendar</InputLabel>
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
          <InputLabel htmlFor="outlined-age-simple">Line</InputLabel>
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
          <InputLabel htmlFor="outlined-age-simple">Product</InputLabel>
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
          <InputLabel htmlFor="outlined-age-simple">Work Shift</InputLabel>
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
    );
  }
}

export default withStyles(styles)(DowntimeJournalFilter);
