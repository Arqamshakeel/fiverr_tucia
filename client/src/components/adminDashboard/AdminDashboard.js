import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Button, Grid } from "@material-ui/core";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h4" gutterBottom component="div">
                Instructions
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi unde similique beatae. Pariatur nihil voluptatum
                quibusdam beatae eos animi deserunt consequuntur harum adipisci
                ex deleniti accusamus veniam, alias inventore facere.
              </Typography>

              <Grid container>
                <Grid item xs={8}>
                  <img
                    width="80%"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
                    alt=""
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box
                    display="flex"
                    //   justifyContent="center"
                    alignItems="center"
                    css={{ height: "100%" }}
                  >
                    <Button variant="contained" color="primary">
                      Download Image
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.isRequired,
    carbs: PropTypes.isRequired,
    fat: PropTypes.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.isRequired,
    protein: PropTypes.isRequired,
  }).isRequired,
};

const rows = [
  createData("76qdf727q", "Beauty/Retouching", "24 hours", "$8.0", "Pending"),
  createData("3423jjkn2", "Face swap", "24 hours", "$16.0", "completed"),
];

export default function AdminDashboard() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Order Type</TableCell>
            <TableCell align="right">Estimated Time</TableCell>
            <TableCell align="right">Paid Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import { Button, Grid } from "@material-ui/core";

// const useRowStyles = makeStyles({
//   root: {
//     "& > *": {
//       borderBottom: "unset",
//     },
//   },
// });

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       { date: "2020-01-05", customerId: "11091700", amount: 3 },
//       { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();

//   return (
//     <React.Fragment>
//       <TableRow className={classes.root}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               <Typography variant="h6" gutterBottom component="div">
//                 Instructions
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>
//                       Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                       Commodi unde similique beatae. Pariatur nihil voluptatum
//                       quibusdam beatae eos animi deserunt consequuntur harum
//                       adipisci ex deleniti accusamus veniam, alias inventore
//                       facere.
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   <TableRow>
//                     <Grid container>
//                       <Grid item xs={8}>
//                         <img
//                           width="80%"
//                           src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg"
//                           alt=""
//                         />
//                       </Grid>
//                       <Grid item xs={4}>
//                         <Box
//                           display="flex"
//                           //   justifyContent="center"
//                           alignItems="center"
//                           css={{ height: "100%" }}
//                         >
//                           <Button variant="contained" color="primary">
//                             Download Image
//                           </Button>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.isRequired,
//     carbs: PropTypes.isRequired,
//     fat: PropTypes.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.isRequired,
//     protein: PropTypes.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData("76qdf727q", "Beauty/Retouching", "24 hours", "$8.0", "Pending"),
//   createData("3423jjkn2", "Face swap", "24 hours", "$16.0", "completed"),
// ];

// export default function AdminDashboard() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Order ID</TableCell>
//             <TableCell align="right">Order Type</TableCell>
//             <TableCell align="right">Estimated Time</TableCell>
//             <TableCell align="right">Paid Amount</TableCell>
//             <TableCell align="right">Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
