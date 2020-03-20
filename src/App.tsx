import React from 'react';
import './App.css';
import { Route, Router } from 'react-router';
import Navbar from './components/Navbar';
import history from './assets/history/history';

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Route path="/App" component={Navbar}></Route>
      </Router>
    </>
  );
};

export default App;
