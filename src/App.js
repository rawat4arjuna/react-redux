import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers/reducers';
const store = createStore(reducer);
function App() {
  return (
    <Provider store={store} className="App">
     
    </Provider>
  );
}

export default App;
