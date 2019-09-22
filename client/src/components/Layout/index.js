import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  CssBaseline,
  withStyles,
  Drawer,
  AppBar,
  Toolbar,
  MenuList,
  MenuItem,
  Typography,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SecurityIcon from "@material-ui/icons/Security";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh"
  }
});

class Layout extends Component {
  state = {
    open: false,
    date: new Date()
  };

  changeDate = () => {
    this.setState({
      ...this.state,
      date: new Date()
    });
  };

  handleDrawerOpen = () => {
    this.setState({
      ...this.state,
      open: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      ...this.state,
      open: false
    });
  };

  render() {
    const { classes, children } = this.props;
    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuList>
          {[
            ["Menu", <HomeIcon />, "/"],
            ["Dashboard", <DashboardIcon />, "/dashboard"],
            ["Charts", <AssessmentIcon />, "/charts"],
            ["Journal", <AssignmentIcon />, "/journal"],
            ["Calendar", <DateRangeIcon />, "/calendar"],
            ["Admin", <SecurityIcon />, "/admin"]
          ].map((item, index) => (
            <MenuItem button key={item[0]} component={Link} to={item[2]}>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </MenuItem>
          ))}
        </MenuList>
        <Divider />
        <MenuList>
          {[
            ["About", <InfoIcon />, "/about"],
            ["Logout", <ExitToAppIcon />, "/logout"]
          ].map((item, index) => (
            <MenuItem button key={item[0]} component={Link} to={item[2]}>
              <ListItemIcon>{item[1]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </MenuItem>
          ))}
        </MenuList>
      </div>
    );
    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: this.state.open
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: this.state.open
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                OEE
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open
              })
            }}
            open={this.state.open}
          >
            {drawer}
          </Drawer>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
