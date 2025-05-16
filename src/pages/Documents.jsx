import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Documents() {
  const [formData, setFormData] = useState({ title: '', description: '', file_url: '' });
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('/api/documents')
      .then(res => res.json())
      .then(data => setDocuments(data))
      .catch(err => console.error('Error fetching documents:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const newDoc = await response.json();
      setDocuments([newDoc, ...documents]);
      setFormData({ title: '', description: '', file_url: '' });
    } else {
      alert('Failed to upload document.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8 space-y-10">
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Upload New Document</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Document Title"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Description"
              rows="3"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="url"
              name="file_url"
              value={formData.file_url}
              onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
              placeholder="File URL (e.g., PDF)"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Upload
            </button>
          </form>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Available Documents</h2>
          {documents.length === 0 ? (
            <p className="text-gray-600">No documents available.</p>
          ) : (
            <ul className="space-y-4">
              {documents.map((doc) => (
                <li key={doc.id} className="border p-4 rounded">
                  <h3 className="font-semibold text-lg">{doc.title}</h3>
                  <p className="text-gray-600">{doc.description}</p>
                  <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    View Document
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Documents;
