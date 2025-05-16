// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Navbar() {
//   const location = useLocation();

//   const isActive = (path) => {
//     return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="text-xl font-bold text-gray-800">
//             Unimark Apartments
//           </Link>
          
//           <div className="hidden md:flex space-x-8">
//             <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
//               Home
//             </Link>
//             <Link to="/committee" className={`${isActive('/committee')} transition-colors duration-200`}>
//               Committee
//             </Link>
//             <Link to="/payments" className={`${isActive('/payments')} transition-colors duration-200`}>
//               Payments
//             </Link>
//             <Link to="/maintenance" className={`${isActive('/maintenance')} transition-colors duration-200`}>
//               Maintenance
//             </Link>
//             <Link to="/meetings" className={`${isActive('/meetings')} transition-colors duration-200`}>
//               Meetings
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Unimark Apartments
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>Home</Link>
            <Link to="/committee" className={`${isActive('/committee')} transition-colors duration-200`}>Committee</Link>
            <Link to="/payments" className={`${isActive('/payments')} transition-colors duration-200`}>Payments</Link>
            <Link to="/maintenance" className={`${isActive('/maintenance')} transition-colors duration-200`}>Maintenance</Link>
            <Link to="/meetings" className={`${isActive('/meetings')} transition-colors duration-200`}>Meetings</Link>
            <Link to="/documents" className={`${isActive('/documents')} transition-colors duration-200`}>Documents</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;