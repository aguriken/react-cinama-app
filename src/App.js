import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <h1 className="app">Setup React Redux</h1>
    </Provider>
  );
};

export default App;
