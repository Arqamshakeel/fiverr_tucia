import React from "react";
import UserTabTableRow from "./UserTabTableRow";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

function createGeneralJSON(messenger, address, note, tags) {
  return { messenger, address, note, tags };
}
function createDriverJSON(farecharges) {
  return { farecharges };
}
function createphoneoptionJSON(enable, user, port, expires, domain) {
  return { enable, user, port, expires, domain };
}

function createData(
  id,
  driver,
  dispatcher,
  username,
  password,
  firstname,
  lastname,
  phone,
  drivinglicense,
  operatorlicense,
  general,
  drivertab,
  phoneoption
) {
  return {
    id,
    driver,
    dispatcher,
    username,
    password,
    firstname,
    lastname,
    phone,
    drivinglicense,
    operatorlicense,
    general,
    drivertab,
    phoneoption,
  };
}

const UserTabTable = () => {
  const [rows, setRows] = React.useState([
    createData(
      1,
      "Standard",
      "No",
      "driver1",
      "abc",
      "First",
      "Name",
      "090078601",
      "Driving license",
      "Operator license",
      createGeneralJSON(true, "Addresss", "Note", ["Tag1", "Tag2"]),
      createDriverJSON("20"),
      createphoneoptionJSON(true, "User", "Port", "Expires", "Domain")
    ),
    createData(
      2,
      "Standard",
      "No",
      "driver1",
      "abc",
      "First",
      "Name",
      "090078601",
      "Driving license",
      "Operator license",
      createGeneralJSON(true, "Addresss", "Note", ["Tag1", "Tag2"]),
      createDriverJSON("20"),
      createphoneoptionJSON(true, "User", "Port", "Expires", "Domain")
    ),
    createData(
      3,
      "Standard",
      "No",
      "driver1",
      "abc",
      "First",
      "Name",
      "090078601",
      "Driving license",
      "Operator license",
      createGeneralJSON(true, "Addresss", "Note", ["Tag1", "Tag2"]),
      createDriverJSON("20", ""),
      createphoneoptionJSON(false)
    ),
  ]);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>

            <TableCell align="center">DRIVER</TableCell>
            <TableCell align="center">DISPATCHER</TableCell>
            <TableCell align="center">USERNAME</TableCell>

            <TableCell align="center">PASSWORD</TableCell>
            <TableCell align="center">FIRST NAME</TableCell>
            <TableCell align="center">LAST NAME</TableCell>
            <TableCell align="center">PHONE NUMBER</TableCell>
            <TableCell align="center">DRIVING LICENSE</TableCell>
            <TableCell align="center">OPERATOR LICENSE</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <UserTabTableRow
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

export default UserTabTable;
