import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';
import React, { useState } from 'react';
import Sidemenu from './components/Sidemenu';
import Home from './Home';
import Popup from './components/Popup';
import Player from './components/Player';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Books from './components/Books';
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
          <MainContent />
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
