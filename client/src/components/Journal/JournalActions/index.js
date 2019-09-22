import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    display: "flex",
    flexDirection: "column"
    // alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "180px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  rootDowntimeReasons: {}
});

class JournalActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downtimeReason: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      downtimeReason: event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.rootDowntimeReasons}>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <Typography variant="h6" component="h3">
                Reasons
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <Typography variant="subtitle2" component="h4">
                Downtime Reason
              </Typography>
              <form autoComplete="off">
                <FormControl className={classes.formControl}>
                  {/* <InputLabel shrink htmlFor="age-simple">
                    Downtime Reason
                  </InputLabel> */}
                  <Select
                    value={this.state.downtimeReason}
                    onChange={this.handleChange}
                    displayEmpty
                    inputProps={{
                      name: "age",
                      id: "age-simple"
                    }}
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value={"brkDownType1"}>Breakdown Type 1</MenuItem>
                    <MenuItem value={"brkDownType2"}>Breakdown Type 2</MenuItem>
                    <MenuItem value={"brkDownType3"}>Breakdown Type 3</MenuItem>
                    <MenuItem value={"brkDownType4"}>Breakdown Type 4</MenuItem>
                    <MenuItem value={"brkDownType5"}>Breakdown Type 5</MenuItem>
                  </Select>
                </FormControl>
              </form>
              <br></br>
              <div>
                <Typography variant="subtitle2" component="h4">
                  Quality Time Lost
                </Typography>

                <TextField
                  id="standard-name"
                  label="discoloration"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="inc extrusion"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="underweight"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="x-dim high"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="y-dim low"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
              <br></br>
              <div>
                <Typography variant="subtitle2" component="h4">
                  Total Productive Losses
                </Typography>

                <TextField
                  id="standard-name"
                  label="Scheduled C/O's"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="Unscheduled C/O's"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="Manpower shortage"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="Materials Shortage"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="Other Production Losses"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="standard-name"
                  label="Unaccounted Losses"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
            </ExpansionPanelDetails>
            <br></br>
            <Divider />
            <ExpansionPanelActions>
              <Button variant="contained" className={classes.button}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Save
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(JournalActions);
