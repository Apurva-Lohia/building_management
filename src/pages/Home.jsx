import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabasedbKey = import.meta.env.SUPABASE_DB_URL;
const supabase = createClient(supabaseUrl, supabaseKey, supabasedbKey);

function Home() {
  const [buildingStatus, setBuildingStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Test Supabase connection
  const fetchTestTable = async () => {
    try {
      const { data, error } = await supabase.from('test').select('*');
      if (error) throw error;
      console.log('✅ Supabase test table data:', data);
    } catch (err) {
      console.error('❌ Supabase error:', err.message);
    }
  };

  const fetchBuildingStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/building_status');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBuildingStatus(data);
    } catch (error) {
      console.error('Error fetching building status:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBuildingStatus();
    fetchTestTable(); // test Supabase connection on page load
  }, []);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Unimark Apartments</h1>
        <img 
          src="https://img.agentaccount.com/fbccb555abdac40a8dd8520ed4fd7797be348a06" 
          alt="Society Building" 
          className="w-screen h-80 object-cover"
        />
      </section>

      {/* Building Status Section */}
      <section className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Building Status</h2>
          <button 
            onClick={fetchBuildingStatus}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh Status'}
          </button>
        </div>
        {loading ? (
          <p className="text-gray-600">Loading status...</p>
        ) : error ? (
          <p className="text-red-600">Error: {error}</p>
        ) : buildingStatus ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Elevator Status</h3>
              <p className={`${buildingStatus.elevatorStatus === 'operational' ? 'text-green-600' : 'text-red-600'}`}>
                {buildingStatus.elevatorStatus}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: {new Date(buildingStatus.lastUpdated).toLocaleString()}
              </p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold">HVAC Status</h3>
              <p className={`${buildingStatus.hvacStatus === 'operational' ? 'text-green-600' : 'text-red-600'}`}>
                {buildingStatus.hvacStatus}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: {new Date(buildingStatus.lastUpdated).toLocaleString()}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Unable to load building status</p>
        )}
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/committee" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow block">
          <h3 className="text-xl font-semibold mb-2">Committee</h3>
          <p className="text-gray-600">View committee members and roles</p>
        </Link>
        <Link to="/payments" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow block">
          <h3 className="text-xl font-semibold mb-2">Payments</h3>
          <p className="text-gray-600">Manage your payments and dues</p>
        </Link>
        <Link to="/maintenance" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow block">
          <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
          <p className="text-gray-600">Submit maintenance requests</p>
        </Link>
        <Link to="/meetings" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow block">
          <h3 className="text-xl font-semibold mb-2">Meetings</h3>
          <p className="text-gray-600">View upcoming meetings and minutes</p>
        </Link>
      </section>

      {/* Announcements */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Latest Announcements</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Monthly Maintenance Schedule</h3>
            <p className="text-gray-600">Regular maintenance work will be conducted on Saturday</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Committee Meeting</h3>
            <p className="text-gray-600">Next committee meeting scheduled for next week</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
