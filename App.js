import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Map from './components/Map';
import Health from './components/Health';
import Mypage from './components/Mypage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/health" element={<Health />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
