import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/reducers";
import Route from "./routes/index";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./utils/Theme/dark";
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store} className="App">
      <ThemeProvider theme={Theme}>
        <Route />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
