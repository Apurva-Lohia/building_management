import React, { useState, useEffect } from 'react';

function Maintenance() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'general'
  });

  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false); // Added

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('/api/maintenance_requests');
        const data = await response.json();
        setMaintenanceRequests(data);
      } catch (error) {
        console.error('Error fetching maintenance requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/maintenance_requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 201) {
        const result = await response.json();
        alert('Maintenance request submitted successfully!');
        console.log(result);

        setFormData({
          title: '',
          description: '',
          priority: 'medium',
          category: 'general'
        });

        if (result.redirect) {
          window.location.href = result.redirect;
          return;
        }

        const updatedRequests = await fetch('/api/maintenance_requests');
        const data = await updatedRequests.json();
        setMaintenanceRequests(data);
      } else {
        alert('Failed to submit maintenance request.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the request.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Maintenance</h1>
        <p className="text-gray-600">Submit and track maintenance requests</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Submit Maintenance Request</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="general">General</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="carpentry">Carpentry</option>
                <option value="painting">Painting</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Recent Requests</h2>

        <button
          onClick={() => setShowRequests(true)}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          View Requests
        </button>

        {showRequests && (
          <div className="space-y-4">
            {maintenanceRequests.length === 0 ? (
              <p className="text-gray-500">Loading maintenance requests...</p>
            ) : (
              maintenanceRequests.map((request) => (
                <div
                  key={request.id}
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{request.title}</h3>
                      <p className="text-gray-600">{request.description}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${request.priority === 'High'
                          ? 'bg-red-100 text-red-800'
                          : request.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'}`}
                    >
                      {request.priority}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Category: {request.category}</span>
                    <span>Date: {request.date}</span>
                    <span>Status: {request.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Maintenance Guidelines</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Response Time</h3>
            <p className="text-gray-600">High priority issues will be addressed within 24 hours</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Emergency Contacts</h3>
            <p className="text-gray-600">For urgent issues, contact the maintenance team at: (123) 456-7890</p>
          </div>
          <div className="pb-4">
            <h3 className="font-semibold">Working Hours</h3>
            <p className="text-gray-600">Regular maintenance work is carried out between 9:00 AM and 5:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Maintenance;
