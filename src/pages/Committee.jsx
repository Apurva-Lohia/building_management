import React from 'react';

function Committee() {
  const committeeMembers = [
    {
      name: "John Doe",
      role: "President",
      contact: "john.doe@society.com",
      term: "2023-2025"
    },
    {
      name: "Jane Smith",
      role: "Vice President",
      contact: "jane.smith@society.com",
      term: "2023-2025"
    },
    {
      name: "Mike Johnson",
      role: "Treasurer",
      contact: "mike.j@society.com",
      term: "2023-2025"
    },
    {
      name: "Sarah Williams",
      role: "Secretary",
      contact: "sarah.w@society.com",
      term: "2023-2025"
    },
    {
      name: "David Brown",
      role: "Maintenance Head",
      contact: "david.b@society.com",
      term: "2023-2025"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Committee Members</h1>
        <p className="text-gray-600">Meet the dedicated team managing our society</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Current Committee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 mb-2">Term: {member.term}</p>
              <p className="text-gray-600">{member.contact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Committee Responsibilities</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">President</h3>
            <p className="text-gray-600">Oversees all society operations and represents the society in external matters</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Vice President</h3>
            <p className="text-gray-600">Assists the president and handles internal affairs</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Treasurer</h3>
            <p className="text-gray-600">Manages society finances and maintains financial records</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Secretary</h3>
            <p className="text-gray-600">Maintains meeting minutes and official records</p>
          </div>
          <div className="pb-4">
            <h3 className="font-semibold">Maintenance Head</h3>
            <p className="text-gray-600">Oversees all maintenance and repair work in the society</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Committee;