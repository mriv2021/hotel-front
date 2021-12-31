/* import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import lightBlue from "@material-ui/core/colors/lightBlue"; */

import { createTheme } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";
import teal from "@mui/material/colors/teal"

const theme = createTheme({
  palette: {
    primary: {
      main: teal[900],
    },
    secondary: {
      main: purple[500],
    }
  }
});

export default theme;
