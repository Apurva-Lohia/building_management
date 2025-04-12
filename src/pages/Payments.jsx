import React, { useEffect } from 'react';

function Payments() {
  useEffect(() => {
    console.log('Payment API Key:', import.meta.env.VITE_PAYMENT_API_KEY)
  }, []);

  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Payments</h1>
        <p className="text-gray-600">Manage your society payments and dues</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Payment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Online Payment</h3>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Pay Now
            </button>
            <p className="mt-4 text-gray-600">Pay securely using UPI, Card, or Net Banking</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Offline Payment</h3>
            <p className="text-gray-600 mb-4">Visit the society office to make payments</p>
            <p className="text-gray-600">Office Hours: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Payment Guidelines</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Due Dates</h3>
            <p className="text-gray-600">
              Maintenance charges are due by the 5th of every month (see Maintenance Calendar below). Read the maintenance charges PDF below for a detailed breakdown of charges.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">Late Payment Charges</h3>
            <p className="text-gray-600">A late payment fee of ₹100 will be charged after the due date</p>
          </div>
          <div className="pb-4">
            <h3 className="font-semibold">Payment Receipts</h3>
            <p className="text-gray-600">Digital receipts will be sent to your registered email after successful payment</p>
          </div>
        </div>
      </section>

      {/* PDF Display Section */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Important Documents</h2>
        <p className="text-gray-600 mb-4">View the latest maintenance charges and payment calendar below.</p>

        {/* Side-by-side PDF display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Maintenance Charges PDF */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Maintenance Charge</h3>
            <iframe
              src="/Maintenance Charge.pdf"
              width="100%"
              height="500px"
              className="border rounded-lg"
            ></iframe>
          </div>

          {/* Payment Calendar PDF */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Payment Calendar</h3>
            <iframe
              src="/Payment Calendar.pdf"
              width="100%"
              height="500px"
              className="border rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Payments;