import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AccessibilityWidget from '../AccessibilityWidget';
import ErrorBoundary from '../ErrorBoundary';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="layout">
        <Header />
        <main className="main-content">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <Footer />
        <AccessibilityWidget />
      </div>
    </ErrorBoundary>
  );
};

export default Layout;