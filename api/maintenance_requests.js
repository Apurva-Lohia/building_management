// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     // Send mock maintenance requests
//     const maintenanceRequests = [
//       {
//         id: "REQ001",
//         title: "Water Leakage",
//         category: "Plumbing",
//         priority: "High",
//         status: "In Progress",
//         date: "2024-03-20",
//         description: "Water leakage in bathroom",
//       },
//       {
//         id: "REQ002",
//         title: "Broken Light",
//         category: "Electrical",
//         priority: "Medium",
//         status: "Pending",
//         date: "2024-03-19",
//         description: "Light not working in living room",
//       },
//     ];
//     res.status(200).json(maintenanceRequests);
//   }

//   else if (req.method === 'POST') {
//     const newRequest = req.body;

//     console.log("Received POST:", newRequest);

//     // Redirect or respond
//     res.status(201).json({
//       message: 'Request submitted successfully',
//       data: newRequest,
//       redirect: 'https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg'
//     });
//   }

//   else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// /api/maintenance_requests.js

import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await sql`SELECT * FROM maintenance_requests ORDER BY date DESC`;
      res.status(200).json(result);
    } catch (error) {
      console.error('Error fetching maintenance requests:', error);
      res.status(500).json({ error: 'Database error' });
    }
  }

  else if (req.method === 'POST') {
    const { title, description, priority, category } = req.body;

    try {
      const inserted = await sql`
        INSERT INTO maintenance_requests (title, description, priority, category)
        VALUES (${title}, ${description}, ${priority}, ${category})
        RETURNING *;
      `;

      res.status(201).json({
        message: 'Request submitted successfully',
        data: inserted[0],
        redirect: 'https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg'
      });
    } catch (error) {
      console.error('Error inserting maintenance request:', error);
      res.status(500).json({ error: 'Failed to insert maintenance request' });
    }
  }

  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}