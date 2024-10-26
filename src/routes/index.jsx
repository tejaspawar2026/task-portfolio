import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutme" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contactme" element={<ContactPage />} />
    </Routes>
  );
};

export default RoutesConfig;
