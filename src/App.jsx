import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Committee from './pages/Committee';
import Payments from './pages/Payments';
import Maintenance from './pages/Maintenance';
import Meetings from './pages/Meetings';
import Documents from './pages/Documents';
import Login from './pages/Login';
import Levy from './pages/Levy';


const verifyUser = async () => {
  const token = 'your-auth-token'; // Get this from your auth system
  const response = await fetch('/api/auth-verify', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const authStatus = await response.json();
  console.log(authStatus); // Will show authentication status
};

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
            <Route path="/documents" element={<Documents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/levy" element={<Levy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


