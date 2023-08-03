import { TableHead } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const createData = (name, score) => {
  return { name, score };
};

const ScoreTable = ({ winnerX, winnerO, tied }) => {
  const rows = [
    createData("X", `${winnerX}`),
    createData("O", `${winnerO}`),
    createData("Empate", `${tied}`),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "35%", backgroundColor: "var(--color-primary)" }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "var(--color-contrast)" }}>
              <h2>Puntuaciones</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{ color: "var(--color-contrast)", fontSize: "0.8rem" }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ color: "var(--color-contrast)" }}>
                {row.score}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
