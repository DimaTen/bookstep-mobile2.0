import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import React, { useState } from 'react';
import Sidemenu from './components/Sidemenu';
import Popup from './components/Popup';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import MainContent from './components/MainContent';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <div className="container-fluid">
          <Header isOpen={isOpen} setTrigger={setIsOpen} />
          <section className="hider"></section>
          <MainContent setTrigger={setIsOpen} />
          <Popup trigger={isOpen}>
            <Sidemenu setTrigger={setIsOpen} />
          </Popup>
          <Footer />
        </div>
      </AuthProvider>
    </Router>

  );
};

export default App;
