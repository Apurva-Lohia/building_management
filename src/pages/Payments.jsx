import React from 'react';

function Payments() {
  const recentPayments = [
    {
      date: "2024-03-15",
      amount: "₹5000",
      type: "Maintenance",
      status: "Paid",
      transactionId: "TXN123456"
    },
    {
      date: "2024-03-01",
      amount: "₹2000",
      type: "Water Bill",
      status: "Paid",
      transactionId: "TXN123455"
    },
    {
      date: "2024-02-15",
      amount: "₹5000",
      type: "Maintenance",
      status: "Paid",
      transactionId: "TXN123454"
    }
  ];

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
        <h2 className="text-2xl font-bold mb-6">Recent Payments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPayments.map((payment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Payment Guidelines</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">Due Dates</h3>
            <p className="text-gray-600">Maintenance charges are due by the 5th of every month</p>
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
    </div>
  );
}

export default Payments;