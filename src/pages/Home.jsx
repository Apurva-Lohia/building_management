import React from 'react';

function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Society Name</h1>
        <p className="text-gray-600">Your trusted community management platform</p>
      </section>

      {/* Full-Width Society Building Image */}
      <img 
        src="https://live-production.wcms.abc-cdn.net.au/53fd9940c571f5366d6ffe53cc6a2dbc?impolicy=wcms_crop_resize&cropH=608&cropW=1080&xPos=0&yPos=55&width=862&height=485"  // Replace with actual URL
        alt="Society Building" 
        className="w-screen h-auto object-contain"
      />

      {/* Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Committee</h3>
          <p className="text-gray-600">View committee members and roles</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Payments</h3>
          <p className="text-gray-600">Manage your payments and dues</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
          <p className="text-gray-600">Submit maintenance requests</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Meetings</h3>
          <p className="text-gray-600">View upcoming meetings and minutes</p>
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Latest Announcements</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Monthly Maintenance Schedule</h3>
            <p className="text-gray-600">Regular maintenance work will be conducted on Saturday</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Committee Meeting</h3>
            <p className="text-gray-600">Next committee meeting scheduled for next week</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

// import React from 'react';

// function Home() {
//   return (
//     <div className="space-y-8">
//       {/* Hero Section */}
//       <section className="bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Society Name</h1>
//         <p className="text-gray-600">Your trusted community management platform</p>
//       </section>

//       {/* Quick Actions */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
//           <h3 className="text-xl font-semibold mb-2">Committee</h3>
//           <p className="text-gray-600">View committee members and roles</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
//           <h3 className="text-xl font-semibold mb-2">Payments</h3>
//           <p className="text-gray-600">Manage your payments and dues</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
//           <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
//           <p className="text-gray-600">Submit maintenance requests</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
//           <h3 className="text-xl font-semibold mb-2">Meetings</h3>
//           <p className="text-gray-600">View upcoming meetings and minutes</p>
//         </div>
//       </section>

//       {/* Announcements */}
//       <section className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-2xl font-bold mb-4">Latest Announcements</h2>
//         <div className="space-y-4">
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Monthly Maintenance Schedule</h3>
//             <p className="text-gray-600">Regular maintenance work will be conducted on Saturday</p>
//           </div>
//           <div className="border-b pb-4">
//             <h3 className="font-semibold">Committee Meeting</h3>
//             <p className="text-gray-600">Next committee meeting scheduled for next week</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;