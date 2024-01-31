import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Box } from "@mui/material";

function App() {
  // hi
  return (
    <Router>
      <Box
        style={{
          display: 'flex',
          width: '98.25%',
          padding: '16px',
          alignItems: 'flex-start',
          gap: '16px',
          borderRadius: '32px',
          background: 'var(--Off-White, #F6F6F3)',
        }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Add more routes as needed */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
