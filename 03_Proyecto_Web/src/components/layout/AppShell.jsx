import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';

export default function AppShell() {
  return (
    <div className="app-container">
      <Topbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
