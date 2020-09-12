import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { IconButton, Box } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  closed,
  filed,
  pickup,
  dropoff,
  passenger,
  car,
  driver,
  source,
  reason
) {
  return {
    closed,
    filed,
    pickup,
    dropoff,
    passenger,
    car,
    driver,
    source,
    reason,
  };
}

const rows = [
  createData("Arqam", "2/9 18:06", "2/9 05:06", "Fuel", "SUV"),
  createData("Arqam", "2/9 18:06", "2/9 05:06", "Fuel", "SUV"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Suspensions() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Box display="flex" justifyContent="center" alignItems="center">
                Action
              </Box>
            </StyledTableCell>
            <StyledTableCell>Driver</StyledTableCell>
            <StyledTableCell>Start</StyledTableCell>
            <StyledTableCell>End</StyledTableCell>
            <StyledTableCell>Reason</StyledTableCell>
            <StyledTableCell>Vehicle</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <IconButton aria-label="delete" className={classes.margin}>
                    <SearchIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete" className={classes.margin}>
                    <FileCopyIcon fontSize="small" />
                  </IconButton>
                </Box>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.closed}
              </StyledTableCell>
              <StyledTableCell>{row.filed}</StyledTableCell>
              <StyledTableCell>{row.pickup}</StyledTableCell>
              <StyledTableCell>{row.dropoff}</StyledTableCell>
              <StyledTableCell>{row.passenger}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
