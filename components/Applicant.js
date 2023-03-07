import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

// function createData(name, surname, email, skills, exp) {
//   return {
//     name,
//     surname,
//     email,
//     skills,
//     exp,
//   };
// }

function Row(props) {
  //   const { arrApplicant } = props;
  const [open, setOpen] = React.useState(false);
  console.log("props", props);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
          {props.row.name}
        </TableCell>
        <TableCell align="right">{props.row.surname}</TableCell>
        <TableCell align="right">{props.row.email}</TableCell>
        <TableCell align="right">{props.row.skills}</TableCell>
        <TableCell align="right">{props.row.exp}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {props.name} {props.surname}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   arrApplicant: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     surname: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     skills: PropTypes.string.isRequired,
//     exp: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable() {
  const [allApplicants, setAllApplicants] = useState([]);
  useEffect(() => {
    console.log("test");
    fetch("http://localhost:3000/admin/applicants")
      .then((response) => response.json())
      .then((data) => {
        setAllApplicants(data.allApplicants);
      });
  }, []);
  const arrApplicant = allApplicants.map((data, i) => {
    return <Row key={data.name} row={data} />;

    //   createData(
    //     data.name,
    //     data.surname,
    //     data.email,
    //     data.resume.skills,
    //     data.resume.experiences
    //   );
  });
  console.log("tableau", arrApplicant);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Skills</TableCell>
            <TableCell align="right">Exp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {arrApplicant.map((row, i) => (
            <Row key={row.name} row={row} />
          ))} */}
          {arrApplicant}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
