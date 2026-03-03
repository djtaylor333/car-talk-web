import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/layout.css';

const Layout: React.FC = () => (
  <div className="app-shell">
    <main className="app-content">
      <Outlet />
    </main>
    <nav className="bottom-nav" aria-label="Main navigation">
      <NavLink to="/search" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">🔍</span>
        <span className="nav-label">Search</span>
      </NavLink>
      <NavLink to="/inbox" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">💬</span>
        <span className="nav-label">Inbox</span>
      </NavLink>
      <NavLink to="/friends" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">👥</span>
        <span className="nav-label">Friends</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-icon">🚗</span>
        <span className="nav-label">Profile</span>
      </NavLink>
    </nav>
  </div>
);

export default Layout;
