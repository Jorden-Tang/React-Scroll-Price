import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AdminProtectedRoute from './auth/AdminProtectedRoute'
import UserProtectedRoute from './auth/UserProtectedRoute'

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NotFound from './views/NotFoundPage';
import HomePage from './views/HomePage'
import AdminPage from './views/AdminPage'
import NotFoundPage from './views/NotFoundPage'
import AdminLoginPage from './views/AdminLoginPage'
import UserPage from './views/UserPage'
import UserRegPage from './views/UserRegistrationPage'

function App() {
  return (
    <div className="App">
      {/* <Router>
        <HomePage path="/"></HomePage>
        <AdminLoginPage path ="/admin"></AdminLoginPage>
        <NotFound default/>
     </Router> */}
     <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={AdminLoginPage}></Route>
        <Route exact path="/registration" component = {UserRegPage}></Route>
        <AdminProtectedRoute exact path="/admin" component={AdminPage}/>
        <UserProtectedRoute exact path="/dashboard" component = {UserPage}/>
     </BrowserRouter>
    </div>
  );
}
export default App;
