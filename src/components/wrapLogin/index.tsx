import React from 'react';
import Footer from '../footer';
import  './index.scss';

interface LayoutWrapLoginProps {
  children: React.ReactNode;
}

const LayoutWrapLogin: React.FC<LayoutWrapLoginProps> = ({ children }) => (
  <div className="wrap-login">
    <div className="d-flex align-items-center h-100">
      <div className="d-flex align-items-center justify-content-center w-100 flex-column">
        <div className="login-content">{children}
        </div>
        <Footer />
      </div>
    </div>
  
  </div>
);

export default LayoutWrapLogin;
