import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <h1 className="app">Setup React Redux</h1>
    </Provider>
  );
};

export default App;
