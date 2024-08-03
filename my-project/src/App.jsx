import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Interest from './components/Interest';
import Dashboard from './components/Dashboard';
import AllEvents from './components/AllEvents'
import EventDetail from './components/EventDetail'
import Login from './components/LogIn'
import FriendChat from './components/FriendChat'

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/interest">Interest</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allEvents" element={<AllEvents />} />
        <Route path="/eventDetail" element={<EventDetail />} />
        <Route path="/friendChat" element={<FriendChat />} />
      </Routes>
    </>
  );
}

export default App;
