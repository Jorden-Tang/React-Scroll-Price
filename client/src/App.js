import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './views/HomePage'
import AdminLoginPage from './views/AdminLoginPage'
import NotFoundPage from './views/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from "@reach/router"
import NotFound from './views/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
      <HomePage path="/"></HomePage>
      <AdminLoginPage path ="/admin"></AdminLoginPage>
      <NotFound default/>
     </Router>
    </div>
  );
}

export default App;
