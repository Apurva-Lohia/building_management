import React, { useEffect, useState } from 'react';

function Levy() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const res = await fetch('/api/levy_notices');
      const data = await res.json();
      setNotices(data);
    };
    fetchNotices();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Levy Notices</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Owner</th>
            <th className="border px-4 py-2">Entitlements</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Due Date</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((n, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{n.ownerName}</td>
              <td className="border px-4 py-2">{n.entitlements}</td>
              <td className="border px-4 py-2">${n.amount}</td>
              <td className="border px-4 py-2">{new Date(n.dueDate).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{n.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Levy;
