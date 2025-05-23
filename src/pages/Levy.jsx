// import React, { useEffect, useState } from 'react';

// function Levy() {
//   const [notices, setNotices] = useState([]);

//   const fetchNotices = async () => {
//     const res = await fetch('/api/levy_notices');
//     const data = await res.json();
//     setNotices(data);
//   };

//   const markAsPaid = async (id) => {
//     const res = await fetch('/api/levy_notices', {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id }),
//     });

//     if (res.ok) {
//       fetchNotices(); // Refresh notices
//     } else {
//       alert('Failed to update status');
//     }
//   };

//   useEffect(() => {
//     fetchNotices();
//   }, []);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">Levy Notices</h1>
//       <table className="w-full table-auto border">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Owner</th>
//             <th className="border px-4 py-2">Entitlements</th>
//             <th className="border px-4 py-2">Amount</th>
//             <th className="border px-4 py-2">Due Date</th>
//             <th className="border px-4 py-2">Status</th>
//             <th className="border px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {notices.map((n, idx) => (
//             <tr key={idx}>
//               <td className="border px-4 py-2">{n.owner_name}</td>
//               <td className="border px-4 py-2">{n.entitlements}</td>
//               <td className="border px-4 py-2">${n.amount}</td>
//               <td className="border px-4 py-2">{new Date(n.due_date).toLocaleDateString()}</td>
//               <td className="border px-4 py-2 capitalize">{n.status}</td>
//               <td className="border px-4 py-2">
//                 {n.status !== 'paid' && (
//                   <button
//                     onClick={() => markAsPaid(n.id)}
//                     className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
//                   >
//                     Mark as Paid
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Levy;


import React, { useEffect, useState } from 'react';

function Levy() {
  const [notices, setNotices] = useState([]);

  const fetchNotices = async () => {
    const res = await fetch('/api/levy_notices');
    const data = await res.json();
    setNotices(data);
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'paid' ? 'unpaid' : 'paid'; // Toggle the status

    const res = await fetch('/api/levy_notices', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus }),
    });

    if (res.ok) {
      fetchNotices(); // Refresh notices
    } else {
      alert('Failed to update status');
    }
  };

  useEffect(() => {
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
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((n, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{n.owner_name}</td>
              <td className="border px-4 py-2">{n.entitlements}</td>
              <td className="border px-4 py-2">${n.amount}</td>
              <td className="border px-4 py-2">{new Date(n.due_date).toLocaleDateString()}</td>
              <td className="border px-4 py-2 capitalize">{n.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => toggleStatus(n.id, n.status)}
                  className={`${
                    n.status === 'paid' ? 'bg-red-600' : 'bg-green-600'
                  } text-white px-3 py-1 rounded hover:bg-${n.status === 'paid' ? 'red' : 'green'}-700`}
                >
                  Mark as {n.status === 'paid' ? 'Unpaid' : 'Paid'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Levy;
