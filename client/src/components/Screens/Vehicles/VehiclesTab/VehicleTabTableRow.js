import React from "react";

import {
  TableRow,
  TableCell,
  Button,
  Collapse,
  Box,
  Typography,
  IconButton,
  Grid,
  Chip,
} from "@material-ui/core";

import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import ArchiveIcon from "@material-ui/icons/Archive";
import EditIcon from "@material-ui/icons/Edit";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import { red, green } from "@material-ui/core/colors";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const VehicleTabTableRow = ({ row, setRows, rows }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="center">
          <LocalTaxiIcon />
        </TableCell>

        <TableCell align="center">
          <FiberManualRecordSharpIcon
            style={{ color: row.enabled ? green[500] : red[500] }}
          />
        </TableCell>
        <TableCell align="center">{row.number}</TableCell>
        <TableCell align="center">{row.callsign}</TableCell>
        <TableCell align="center">{row.passenger}</TableCell>
        <TableCell align="center">{row.wheelchair}</TableCell>
        <TableCell align="center">{row.luggage}</TableCell>
        <TableCell align="center">{row.type}</TableCell>
        <TableCell align="center">{row.make}</TableCell>
        <TableCell align="center">{row.licenseplate}</TableCell>

        <TableCell align="center">
          <Button>
            <ArchiveIcon
              onClick={() => {
                setRows(rows.filter((item) => item.id !== row.id));
              }}
            />
          </Button>
        </TableCell>
        <TableCell align="center">
          <Button>
            <EditIcon />
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={13}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                General
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  Phone Number:
                </Grid>
                <Grid item xs={2}>
                  {row.phonenumber}
                </Grid>
                <Grid item xs={2}>
                  Branded As:
                </Grid>
                <Grid item xs={2}>
                  {row.brandedas}
                </Grid>
                <Grid item xs={2}>
                  Belongs to group:
                </Grid>
                <Grid item xs={2}>
                  {row.group}
                </Grid>
                <Grid item xs={2}>
                  Tags:
                </Grid>
                <Grid item xs={2}>
                  {row.tags.map((item) => (
                    <Chip label={item} key={item} color="primary" />
                  ))}
                </Grid>
                <Grid item xs={2}>
                  Reserved For:
                </Grid>
                <Grid item xs={2}>
                  {row.reserved.map((item) => (
                    <Chip label={item} key={item} color="primary" />
                  ))}
                </Grid>
                <Grid item xs={2}>
                  Drives for Companies:
                </Grid>
                <Grid item xs={2}>
                  {row.companies.map((item) => (
                    <Chip label={item} key={item} color="primary" />
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default VehicleTabTableRow;
