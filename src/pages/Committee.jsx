// import React from 'react';

// function Committee() {
//   const committeeMembers = [
//     {
//       name: "John Doe",
//       role: "Chairperson",
//       contact: "john.doe@unimark.com",
//       term: "2023-2025",
//       image: "https://audacityaustralia.com.au/wp-content/uploads/2021/02/team-1.jpg"
//     },
//     {
//       name: "Mike Johnson",
//       role: "Treasurer",
//       contact: "mike.johnson@unimark.com",
//       term: "2023-2025",
//       image: "https://st2.depositphotos.com/3528377/6241/i/450/depositphotos_62417217-stock-photo-smiling-young-man.jpg"
//     },
//     {
//       name: "Sarah Williams",
//       role: "Secretary",
//       contact: "sarah.williams@unimark.com",
//       term: "2023-2025",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl-3s27sN3QHbWiuRzijVHVJRcZevBK56VQ&s"
//     },
//     {
//       name: "David Brown",
//       role: "Maintenance Head",
//       contact: "david.brown@unimark.com",
//       term: "2023-2025",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-P2DsWCMv-3Y2P6YjJ1GrDpyXKYw3Tc2aUg&s"
//     }
//   ];

//   return (
//     <div className="space-y-8">
//       <section className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Committee Members</h1>
//         <p className="text-gray-600">Meet the dedicated team managing our society</p>
//       </section>

//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-6">Current Committee</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {committeeMembers.map((member, index) => (
//             <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow text-center">
//               <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
//               <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
//               <p className="text-blue-600 font-medium mb-2">{member.role}</p>
//               <p className="text-gray-600 mb-2">Term: {member.term}</p>
//               <p className="text-gray-600">{member.contact}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4">Committee Responsibilities</h2>
//         <div className="space-y-4">
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">President</h3>
//             <p className="text-gray-600">Oversees all society operations and represents the society in external matters</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Vice President</h3>
//             <p className="text-gray-600">Assists the president and handles internal affairs</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Treasurer</h3>
//             <p className="text-gray-600">Manages society finances and maintains financial records</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Secretary</h3>
//             <p className="text-gray-600">Maintains meeting minutes and official records</p>
//           </div>
//           <div className="pb-4">
//             <h3 className="font-semibold">Maintenance Head</h3>
//             <p className="text-gray-600">Oversees all maintenance and repair work in the society</p>
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
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-1">{member.role}</p>
              {member.term && <p className="text-gray-600 mb-1">Term: {member.term}</p>}
              <p className="text-gray-600 mb-1">{member.contact}</p>
              {member.unit_entitlements !== null && (
                <p className="text-sm text-gray-500">Entitlements: {member.unit_entitlements}</p>
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
            <p className="text-gray-600">Oversees society operations and represents the society externally.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Treasurer</h3>
            <p className="text-gray-600">Manages finances and budget reporting.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Secretary</h3>
            <p className="text-gray-600">Maintains records and documents minutes of meetings.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Maintenance Head</h3>
            <p className="text-gray-600">Oversees maintenance and repair works.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Committee;