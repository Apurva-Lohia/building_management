import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@society.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Society Street</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/committee" className="hover:text-blue-400">Committee</a></li>
              <li><a href="/payments" className="hover:text-blue-400">Payments</a></li>
              <li><a href="/maintenance" className="hover:text-blue-400">Maintenance</a></li>
              <li><a href="/meetings" className="hover:text-blue-400">Meetings</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Society Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;