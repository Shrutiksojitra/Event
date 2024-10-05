import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import CreateEvent from './assets/pages/CreateEvent';
import EventDetail from './assets/pages/EventDetail';
import Login from './assets/pages/Login'; 
import Register from './assets/pages/Register'; 
import Navbar from './assets/components/Navbar'; 
import PrivateRoute from './PrivateRoute'; 
import { AuthProvider } from './assets/context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<PrivateRoute element={<CreateEvent />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
