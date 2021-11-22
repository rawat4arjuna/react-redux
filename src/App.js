import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/reducers";
import Route from "./routes/index";
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store} className="App">
      <Route />
    </Provider>
  );
}

export default App;
