import React, { useEffect, useState } from 'react';

function Meetings() {
  const [pastMeetings, setPastMeetings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPastMeetings = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/past_meetings');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPastMeetings(data);
      } catch (error) {
        console.error('Error fetching past meetings:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPastMeetings();
  }, []);

  const upcomingMeetings = [
    {
      id: "MTG001",
      title: "Annual General Meeting",
      date: "2024-04-15",
      time: "10:00 AM",
      venue: "Community Hall",
      agenda: "Annual review and budget discussion"
    },
    {
      id: "MTG002",
      title: "Committee Meeting",
      date: "2024-03-25",
      time: "3:00 PM",
      venue: "Conference Room",
      agenda: "Maintenance and renovation plans"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Meetings</h1>
        <p className="text-gray-600">View upcoming meetings and past meeting minutes</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Upcoming Meetings</h2>
        <div className="space-y-4">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{meeting.title}</h3>
                  <p className="text-gray-600">{meeting.agenda}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Date:</span> {meeting.date}
                </div>
                <div>
                  <span className="font-semibold">Time:</span> {meeting.time}
                </div>
                <div>
                  <span className="font-semibold">Venue:</span> {meeting.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Past Meetings</h2>
        {loading ? (
          <p className="text-gray-600">Loading past meetings...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="space-y-4">
            {pastMeetings.map((meeting) => (
              <div key={meeting.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{meeting.title}</h3>
                    <p className="text-gray-600">{meeting.minutes}</p>
                  </div>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    View Minutes
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Date:</span> {meeting.date}
                  </div>
                  <div>
                    <span className="font-semibold">Time:</span> {meeting.time}
                  </div>
                  <div>
                    <span className="font-semibold">Venue:</span> {meeting.venue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Meeting Guidelines</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Registration</h3>
            <p className="text-gray-600">Please register at least 24 hours before the meeting</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Quorum</h3>
            <p className="text-gray-600">A minimum of 50% of residents must be present for decisions to be valid</p>
          </div>
          <div className="pb-4">
            <h3 className="font-semibold">Minutes</h3>
            <p className="text-gray-600">Meeting minutes will be available within 48 hours after the meeting</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Meetings;




// import React from 'react';

// function Meetings() {
//   const upcomingMeetings = [
//     {
//       id: "MTG001",
//       title: "Annual General Meeting",
//       date: "2024-04-15",
//       time: "10:00 AM",
//       venue: "Community Hall",
//       agenda: "Annual review and budget discussion"
//     },
//     {
//       id: "MTG002",
//       title: "Committee Meeting",
//       date: "2024-03-25",
//       time: "3:00 PM",
//       venue: "Conference Room",
//       agenda: "Maintenance and renovation plans"
//     }
//   ];

//   const pastMeetings = [
//     {
//       id: "MTG003",
//       title: "Monthly Committee Meeting",
//       date: "2024-03-15",
//       time: "3:00 PM",
//       venue: "Conference Room",
//       minutes: "Discussed new security measures and parking regulations"
//     },
//     {
//       id: "MTG004",
//       title: "Residents Meeting",
//       date: "2024-03-01",
//       time: "6:00 PM",
//       venue: "Community Hall",
//       minutes: "Addressed concerns about water supply and maintenance"
//     }
//   ];

//   return (
//     <div className="space-y-8">
//       <section className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Meetings</h1>
//         <p className="text-gray-600">View upcoming meetings and past meeting minutes</p>
//       </section>

//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-6">Upcoming Meetings</h2>
//         <div className="space-y-4">
//           {upcomingMeetings.map((meeting) => (
//             <div key={meeting.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-xl font-semibold">{meeting.title}</h3>
//                   <p className="text-gray-600">{meeting.agenda}</p>
//                 </div>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                   Register
//                 </button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
//                 <div>
//                   <span className="font-semibold">Date:</span> {meeting.date}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Time:</span> {meeting.time}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Venue:</span> {meeting.venue}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-6">Past Meetings</h2>
//         <div className="space-y-4">
//           {pastMeetings.map((meeting) => (
//             <div key={meeting.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-xl font-semibold">{meeting.title}</h3>
//                   <p className="text-gray-600">{meeting.minutes}</p>
//                 </div>
//                 <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
//                   View Minutes
//                 </button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
//                 <div>
//                   <span className="font-semibold">Date:</span> {meeting.date}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Time:</span> {meeting.time}
//                 </div>
//                 <div>
//                   <span className="font-semibold">Venue:</span> {meeting.venue}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4">Meeting Guidelines</h2>
//         <div className="space-y-4">
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Registration</h3>
//             <p className="text-gray-600">Please register at least 24 hours before the meeting</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Quorum</h3>
//             <p className="text-gray-600">A minimum of 50% of residents must be present for decisions to be valid</p>
//           </div>
//           <div className="pb-4">
//             <h3 className="font-semibold">Minutes</h3>
//             <p className="text-gray-600">Meeting minutes will be available within 48 hours after the meeting</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Meetings;