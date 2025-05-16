import React, { useEffect, useState } from 'react';

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file_url: ''
  });

  const fetchDocuments = async () => {
    try {
      const response = await fetch('/api/documents');
      const data = await response.json();
      setDocuments(data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Document uploaded successfully!');
        setFormData({ title: '', description: '', file_url: '' });
        fetchDocuments();
      } else {
        alert('Failed to upload document.');
      }
    } catch (error) {
      console.error('Error submitting document:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Document Library</h1>
        <p className="text-gray-600">View and upload building-related documents like insurance, reports, etc.</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Upload New Document</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Document Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description (optional)"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="url"
            name="file_url"
            placeholder="Document URL (e.g., Google Drive or Vercel Blob)"
            value={formData.file_url}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Upload Document
          </button>
        </form>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Available Documents</h2>
        <div className="space-y-4">
          {documents.length === 0 ? (
            <p className="text-gray-600">No documents uploaded yet.</p>
          ) : (
            documents.map((doc) => (
              <div key={doc.id} className="border rounded p-4 hover:shadow">
                <h3 className="text-xl font-semibold">{doc.title}</h3>
                <p className="text-gray-600 mb-2">{doc.description}</p>
                <a
                  href={doc.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Document
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Uploaded on: {new Date(doc.uploaded_at).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Documents;
