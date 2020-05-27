import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
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
import UserRegPage from './views/UserRegistrationPage'
import EventPartyPage from './views/EventPartyPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={AdminLoginPage}></Route>
        <Route exact path="/registration" component = {UserRegPage}></Route>
        <AdminProtectedRoute exact path="/admin" component={AdminPage}/>
        <UserProtectedRoute exact path="/event" component = {EventPartyPage}/>
     </BrowserRouter>
    </div>
  );
}
export default App;
