import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Committee from './pages/Committee';
import Payments from './pages/Payments';
import Maintenance from './pages/Maintenance';
import Meetings from './pages/Meetings';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/meetings" element={<Meetings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;