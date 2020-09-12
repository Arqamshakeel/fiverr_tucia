import React from "react";
import VehicleTabTableRow from "./VehicleTabTableRow";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import AccessibleIcon from "@material-ui/icons/Accessible";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

function createData(
  id,
  enabled,
  number,
  callsign,
  passenger,
  wheelchair,
  luggage,
  type,
  make,
  licenseplate,
  phonenumber,
  brandedas,
  group,
  tags,
  companies,
  reserved
) {
  return {
    id,
    enabled,
    number,
    callsign,
    passenger,
    wheelchair,
    luggage,
    type,
    make,
    licenseplate,
    phonenumber,
    brandedas,
    group,
    tags,
    companies,
    reserved,
  };
}

const VehiclesTabTable = () => {
  const [rows, setRows] = React.useState([
    createData(
      1,
      true,
      1,
      "Test-Car1",
      3,
      0,
      4,
      "Sedan",
      "Make-1",
      "License-1",
      "090078601",
      "Brand-1",
      "Group-1",
      ["Tag1", "Tag2", "Tag3"],
      ["company1", "company2", "company3"],
      ["reserved-1", "reserved-2"]
    ),
    createData(
      2,
      false,
      2,
      "Test-Car2",
      1,
      4,
      2,
      "SUV",
      "Make-2",
      "License-2",
      "090078601",
      "Brand-1",
      "Group-1",
      ["Tag1", "Tag2", "Tag3"],
      ["company1", "company2", "company3"],
      ["reserved-1", "reserved-2"]
    ),
    createData(
      3,
      true,
      3,
      "Test-Car3",
      2,
      1,
      0,
      "Sedan",
      "Make-3",
      "License-3",
      "090078601",
      "Brand-1",
      "Group-1",
      ["Tag1", "Tag2", "Tag3"],
      ["company1", "company2", "company3"],
      ["reserved-1", "reserved-2"]
    ),
    createData(
      4,
      false,
      4,
      "Test-Car4",
      5,
      0,
      0,
      "SUV",
      "Make-4",
      "License-4",
      "090078601",
      "Brand-1",
      "Group-1",
      ["Tag1", "Tag2", "Tag3"],
      ["company1", "company2", "company3"],
      ["reserved-1", "reserved-2"]
    ),
    createData(
      5,
      true,
      5,
      "Test-Car5",
      0,
      0,
      0,
      "Sedan",
      "Make-5",
      "License-5",
      "090078601",
      "Brand-1",
      "Group-1",
      ["Tag1", "Tag2", "Tag3"],
      ["company1", "company2", "company3"],
      ["reserved-1", "reserved-2"]
    ),
  ]);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>

            <TableCell align="center">Enabled</TableCell>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">callsign</TableCell>
            <TableCell align="center">
              <PersonIcon />
            </TableCell>
            <TableCell align="center">
              <AccessibleIcon />
            </TableCell>
            <TableCell align="center">
              <BusinessCenterIcon />
            </TableCell>
            <TableCell align="center">TYPE</TableCell>
            <TableCell align="center">MAKE</TableCell>
            <TableCell align="center">LICENCE PLATE</TableCell>
            <TableCell align="center">ARCHIVE</TableCell>
            <TableCell align="center">EDIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <VehicleTabTableRow
              row={row}
              setRows={setRows}
              rows={rows}
              key={index}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehiclesTabTable;
