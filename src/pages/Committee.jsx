// import React, { useEffect, useState } from 'react';

// function Committee() {
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     fetch('/api/committee')
//       .then(res => res.json())
//       .then(data => setMembers(data))
//       .catch(err => console.error('Error loading committee:', err));
//   }, []);

//   return (
//     <div className="space-y-8">
//       <section className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Committee Members</h1>
//         <p className="text-gray-600">Meet the dedicated team managing our society</p>
//       </section>

//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-6">Current Committee</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {members.map((member, index) => (
//             <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow text-center">
//               <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
//               <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
//               <p className="text-blue-600 font-medium mb-1">{member.role}</p>
//               {member.term && <p className="text-gray-600 mb-1">Term: {member.term}</p>}
//               <p className="text-gray-600 mb-1">{member.contact}</p>
//               {member.unit_entitlements !== null && (
//                 <p className="text-sm text-gray-500">Entitlements: {member.unit_entitlements}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4">Committee Responsibilities</h2>
//         <div className="space-y-4">
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Chairperson</h3>
//             <p className="text-gray-600">Oversees society operations and represents the society externally.</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Treasurer</h3>
//             <p className="text-gray-600">Manages finances and budget reporting.</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Secretary</h3>
//             <p className="text-gray-600">Maintains records and documents minutes of meetings.</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Maintenance Head</h3>
//             <p className="text-gray-600">Oversees maintenance and repair works.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Committee;

import React, { useEffect, useState } from 'react';

function Committee() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('/api/committee')
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(err => console.error('Error loading committee:', err));
  }, []);

  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Committee Members</h1>
        <p className="text-gray-600">Meet the dedicated team managing our society</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Current Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-1">{member.role}</p>
              {member.term && <p className="text-gray-600 mb-1">Term: {member.term}</p>}
              <p className="text-gray-600 mb-1">{member.contact}</p>

              {member.unit_entitlements !== null && (
                <>
                  <p className="text-sm text-gray-500 mb-2">
                    Entitlements: {member.unit_entitlements}
                  </p>
                  <button
                    onClick={async () => {
                      await fetch('/api/generate_levy', { method: 'POST' });
                      window.location.href = '/levy';
                    }}
                    className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    View Levy Notice
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Committee Responsibilities</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Chairperson</h3>
            <p className="text-gray-600">
              Oversees society operations and represents the society externally.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Treasurer</h3>
            <p className="text-gray-600">Manages finances and budget reporting.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Secretary</h3>
            <p className="text-gray-600">Maintains records and documents minutes of meetings.</p>
          </div>
          <div className="pb-4">
            <h3 className="font-semibold">Maintenance Head</h3>
            <p className="text-gray-600">Oversees maintenance and repair works.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Committee;