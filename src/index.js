import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import VendorDetails from './VendorDetails';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/VendorDetails" element={<VendorDetails />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
