import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/dashboard';
import EmployeeManagement from './pages/EmployeeManagement';
import AIHRDashboard from './pages/AIHRDashboard';
import Talent from './pages/talent';
import Performance from './pages/Performance';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="employees" element={<EmployeeManagement />} />
            <Route path="talent" element={<Talent/>} />
            <Route path="performance" element={<Performance/>} />
          
          </Route>
        </Routes>
      </Router>
  );
}

export default App;