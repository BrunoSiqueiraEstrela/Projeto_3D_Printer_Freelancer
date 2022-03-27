import {useEffect, userEffect, useState} from 'react';
import api from './services/api';
import UserItem from './components/UserItem';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users'
import User from './pages/User';
import './App.css'

export default function App() {

  return (
    
    <>
    <div className='nav'>
      <nav>
        <ul>
          <li>
            <Link to="/" >HOME</Link> 
          </li>
          <li>
            <Link to="/Users" >USERS</Link> 
          </li>
        </ul>
      </nav>
      <h1>Welcome to React Router!</h1>
    </div>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/User/:id" element={<User />} />
      </Routes>

    </div>
    </>
    
   /*
    <>
      <div className='navBar'>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/:id">Dashboard</Link>
          </li>
        </ul>
        </nav>
      </div>
        <Router>
          <Route exact element={<Home />} path="/">
            <Home />
          </Route>
          <Route element={<Users />}  path="/users">
            <Users />
          </Route>
        </Router>
      
   </>
   */
  );
}


