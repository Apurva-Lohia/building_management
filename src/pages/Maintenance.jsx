import React, { useState } from 'react';

function Maintenance() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'general'
  });

  const maintenanceRequests = [
    {
      id: "REQ001",
      title: "Water Leakage",
      category: "Plumbing",
      priority: "High",
      status: "In Progress",
      date: "2024-03-20",
      description: "Water leakage in bathroom"
    },
    {
      id: "REQ002",
      title: "Broken Light",
      category: "Electrical",
      priority: "Medium",
      status: "Pending",
      date: "2024-03-19",
      description: "Light not working in living room"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
        <div className="space-y-4">
          {maintenanceRequests.map((request) => (
            <div key={request.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{request.title}</h3>
                  <p className="text-gray-600">{request.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${request.priority === 'High' ? 'bg-red-100 text-red-800' :
                    request.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'}`}>
                  {request.priority}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Category: {request.category}</span>
                <span>Date: {request.date}</span>
                <span>Status: {request.status}</span>
              </div>
            </div>
          ))}
        </div>
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