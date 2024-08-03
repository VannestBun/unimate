import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Interest from './components/Interest';
import Dashboard from './components/Dashboard';
import AllEvents from './components/AllEvents'
import EventDetail from './components/EventDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allEvents" element={<AllEvents />} />
        <Route path="/eventDetail" element={<EventDetail />} />
      </Routes>
    </>
  );
}

export default App;
