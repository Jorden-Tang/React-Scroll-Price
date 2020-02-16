import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './views/HomePage'
import AdminPage from './views/AdminPage'
import NotFoundPage from './views/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from "@reach/router"
import NotFound from './views/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
      <HomePage path="/"></HomePage>
      <AdminPage path ="/admin"></AdminPage>
      <NotFound default/>
     </Router>
    </div>
  );
}

export default App;
