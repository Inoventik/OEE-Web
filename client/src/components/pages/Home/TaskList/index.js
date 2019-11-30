import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import axios from "axios";

const styles = theme => ({
  sendMessageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: theme.spacing(2)
  },

  button: {
    // display: "flex"
  },
  sendMessageTitle: {
    width: "100%"
  },
  searchPaper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    flexGrow: 1
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  message: {
    width: "100%"
  }
});

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactsShown: false,
      open: false,
      data: [],
      emailAddress: "",
      taskMessage: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/tasks")
      .then(result => {
        if (result.status === 200) {
          this.setState(prevState => {
            return { ...prevState, data: result.data };
          });
        } else {
          console.log(result.status);
        }
        // console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>To</TableCell>
              <TableCell align="left">From</TableCell>
              <TableCell align="left">Message</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Date Sent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(row => (
              <TableRow key={row.id} hover={true}>
                <TableCell component="th" scope="row">
                  {row.recipient}
                </TableCell>
                <TableCell align="left">{row.sender}</TableCell>
                <TableCell align="left">{row.message}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">
                  {new Date(row.date_sent).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(TaskList);
