import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import AsteroidsGame from './components/AsteroidsGame'; // Import the AsteroidsGame component

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css"; // Import the custom App.css file with font imports

// Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="src/components/AsteroidsGame.js" element={<AsteroidsGame />} />
            <Route path="src/components/About.js" element={<About />} />
            <Route path="src/components/Portfolio.js" element={<Portfolio />} />
            <Route path="src/components/Contact.js" element={<Contact />} />
            <Route path="src/components/Resume.js" element={<Resume />} />
          </Routes>
        </div>
        <div className="container">
          <h1>Welcome to My Portfolio</h1>
          <p>Look below and use A W or D, and SPACEBAR. Sorry, not fully operational for mobile</p>
        </div>
        <div className="asteroids">
          <AsteroidsGame /> {/* Render the AsteroidsGame component */}
          console.log("AsteroidsGame")
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          const ctx = canvas.getContext('2d');
        </div>
        </Router>
        <Footer />
      
    </div>
  );
}
// Render the Footer component
export default App;

