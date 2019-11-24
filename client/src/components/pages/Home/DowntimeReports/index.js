import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Date and Time", minWidth: 200 },
  { id: "code", label: "Duration", minWidth: 100 }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("2019/08/22", "8 Hour(s)"),
  createData("2019/08/21", "3 Hour(s)"),
  createData("2019/08/19", "2 Hour(s)"),
  createData("2019/08/18", "1 Hour(s)"),
  createData("2019/08/16", "0.5 Hour(s)"),
  createData("2019/08/15", "0.25 Hour(s)")
];

const styles = {
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 200,
    overflow: "auto"
  }
};

class DowntimeReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      rowsPerPage: 5
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  setPage(newPage) {
    this.setState({
      page: newPage
    });
  }

  setRowsPerPage(newRowsPerPage) {
    this.setState({
      rowsPerPage: newRowsPerPage
    });
  }

  handleChangePage(event, newPage) {
    this.setPage(newPage);
  }

  handleChangeRowsPerPage(event) {
    this.setRowsPerPage(+event.target.value);
    this.setPage(0);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(DowntimeReports);
