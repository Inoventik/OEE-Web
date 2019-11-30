import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import DialogTitle from "@material-ui/core/DialogTitle";
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

class SendMessage extends Component {
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

  setOpen = newState => {
    axios
      .get("http://localhost:3001/api/users")
      .then(result => {
        if (result.status === 200) {
          this.setState(prevState => {
            // const data = [...prevState.data];
            // const data = [...result.data];
            // data.push(result.data);
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

    this.setState({
      open: newState
    });
  };

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setOpen(false);
  };

  handleSelectContact = (event, emailAddress) => {
    this.setState({ emailAddress: emailAddress });
  };

  updateTaskMesage = e => {
    this.setState({ taskMessage: e.target.value });
  };

  handleSendMessage = () => {
    console.log("POST MESSAGE");
    // TODO: put to config

    let requestObj = {
      recipient: this.state.emailAddress,
      sender: "jayson.zanarias@gmail.com",
      message: this.state.taskMessage,
      status: "OPEN",
      date_sent: new Date().toLocaleDateString()
    };

    axios
      .post("http://localhost:3001/api/task/save", requestObj)
      .then(result => {
        if (result.status === 201) {
          console.log(result.data);
        } else {
          console.log("status: " + result.status);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contacts</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Last Name</TableCell>
                    <TableCell align="left">First Name</TableCell>
                    <TableCell align="left">Email Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(row => (
                    <TableRow
                      key={row.name}
                      hover={true}
                      onClick={event => {
                        this.handleSelectContact(event, row.email_address);
                        this.handleClose();
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.last_name}
                      </TableCell>
                      <TableCell align="left">{row.first_name}</TableCell>
                      <TableCell align="left">{row.email_address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>

        <Paper className={classes.sendMessageContainer}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.sendMessageTitle}
          >
            Send Task / Notification
          </Typography>
          <Paper className={classes.searchPaper}>
            <Typography variant="subtitle2"> &nbsp;To:</Typography>
            <InputBase
              className={classes.input}
              //   inputProps={{ "aria-label": "search google maps" }}
              value={this.state.emailAddress}
            ></InputBase>
            <IconButton
              onClick={this.handleClickOpen}
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>

          <TextField
            label="Message to Send"
            defaultValue=" "
            multiline={true}
            rows={5}
            rowsMax={5}
            variant="outlined"
            margin="normal"
            className={classes.message}
            onChange={this.updateTaskMesage}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="small"
            onClick={this.handleSendMessage}
          >
            Send &nbsp;
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SendMessage);
