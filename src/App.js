import React from 'react';
import './assets/styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/jobs/:filterType" element={<Home />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/edit-job" element={<EditJob />} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
