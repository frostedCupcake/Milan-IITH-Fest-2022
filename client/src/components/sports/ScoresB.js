import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

import Axios from "axios";
function Scores() {
  const [scores, setscores] = useState({
    '1': [
      100, 40, 10, 10,
       20, 10, 70, 10
    ],
    '2': [
      70, 100, 10, 20,
      10,  10, 40, 10
    ],
    '3': [
      70, 40, 10, 100,
      20, 10, 10,   0
    ],
    '4': [
      100, 20, 10, 10,
       40, 70, 10, 10
    ],
    '5': [
      100, 10, 10, 20,
       70, 10, 40, 10
    ],
    '6': [
      100, 20, 10, 40,
       10, 70, 10, 10
    ],
    '7': [
      10, 10, 70,  40,
      10, 10, 20, 100
    ],
    '8': [
      10,  40, 20, 10,
      10, 100, 70, 10
    ],
    '9': [
       10, 10, 20, 70,
      100, 10, 40, 10
    ],
    '10': [
      100, 70, 20, 10,
       10, 10, 40, 10
    ],
    '11': [
      50,  5,  5, 20,
       5, 35, 10,  5
    ],
    '12': [
      20, 10,  40, 10,
      70, 10, 100, 10
    ],
    '13': [
      80,  20, 20, 140,
      20, 200, 40,  20
    ],
    '14': [
      210, 21, 21, 84,
      147, 42, 21, 21
    ],
    '15': [
      300,  30,  30, 30,
       60, 210, 150, 30
    ]
  });
  const darkTheme = createTheme({
    typography: {
      fontSize: 22,
    },
    palette: {
      mode: "dark",
    },
  });
  const gameNames = [
    "CRICKET",
    "FOOTBALL",
    "HOCKEY",
    "VOLLEYBALL",
    "BASKETBALL",
    "BADMINTON",
    "TENNIS",
    "TABLE TENNIS",
    "CARROM",
    "CHESS",
    "SQUASH",
    "WEIGHTLIFTING",
    "ESPORTS",
    "AQUATICS",
    "ATHLETICS",
  ].map((el) => el.toUpperCase());
  const blockNames = [
    "CHARAKA",
    "SUSURUTA",
    "KAUTILYA",
    "VYASA",
    "BRAHMAGUPTA",
    "VARAHAMIHIRA",
    "RAMANUJA",
    "KAPILA",
  ];

  const tableHeaders = ["Block", "Points"].map((el) => el.toUpperCase());
  let itemRows = [];
  for (var event = 0; event < 15; event++) {
    let game = gameNames[event];
    const rows = scores[event + 1];

    const item = (
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "gold",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "gold",
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
            }}
          >
            {game}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ xs: { minWidth: 650 } }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "gold",
                      fontSize: { xs: "1.1rem", sm: "1.5rem" },
                    }}
                  >
                    {tableHeaders[0]}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "gold",
                      p: { xs: 0, sm: "1rem" },
                      textAlign: { xs: "center", sm: "right" },
                      fontSize: { xs: "1.1rem", sm: "1.5rem" },
                    }}
                    align="right"
                  >
                    {tableHeaders[1]}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      fontSize: { xs: "1rem", sm: "1.5rem" },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {blockNames[i]}
                    </TableCell>
                    <TableCell align="right">{row}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    );
    itemRows.push(item);
  }
  

  return (
    <Box
      sx={{
        width: { xs: "80%", md: "50%" },
        margin: "5rem auto",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {itemRows}
      </ThemeProvider>
    </Box>
  );
}

export default Scores;
