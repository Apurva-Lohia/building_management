import React, { useEffect, useState } from 'react';

function Documents() {
  const [formData, setFormData] = useState({ title: '', description: '', file_url: '' });
  const [documents, setDocuments] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await fetch('/api/documents');
      const data = await res.json();
      setDocuments(data);
    } catch (err) {
      console.error('Error fetching documents:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const newDoc = await res.json();
        setDocuments([newDoc, ...documents]);
        setFormData({ title: '', description: '', file_url: '' });
        alert('Document uploaded successfully!');
      } else {
        alert('Upload failed.');
      }
    } catch (err) {
      console.error('Error submitting document:', err);
    }
  };

  return (
    <>

      <div className="container mx-auto px-4 py-8 space-y-10">
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Upload New Document</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                className="w-full px-4 py-2 border rounded-lg"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="file_url" className="block text-sm font-medium text-gray-700 mb-1">File URL</label>
              <input
                id="file_url"
                type="url"
                name="file_url"
                value={formData.file_url}
                onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Upload
            </button>
          </form>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Available Documents</h2>
            <button
              onClick={() => setShowTable(!showTable)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {showTable ? 'Hide Table' : 'View Documents Table'}
            </button>
          </div>

          {showTable && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Description</th>
                    <th className="py-2 px-4 border-b">File Link</th>
                    <th className="py-2 px-4 border-b">Uploaded At</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{doc.title}</td>
                      <td className="py-2 px-4 border-b">{doc.description}</td>
                      <td className="py-2 px-4 border-b">
                        <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                          View
                        </a>
                      </td>
                      <td className="py-2 px-4 border-b">
                        {new Date(doc.uploaded_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Documents;
