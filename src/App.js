import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Route from "./routes/index";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/Theme/light";
import { Grid, CssBaseline } from "@mui/material";
import { Store } from "./redux/store";
function App() {
  return (
    <Provider store={Store} className="App">
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          style={{ height: "100vh" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Route />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
