export default function handler(req, res) {
  if (req.method === 'GET') {
    // Send mock maintenance requests
    const maintenanceRequests = [
      {
        id: "REQ001",
        title: "Water Leakage",
        category: "Plumbing",
        priority: "High",
        status: "In Progress",
        date: "2024-03-20",
        description: "Water leakage in bathroom",
      },
      {
        id: "REQ002",
        title: "Broken Light",
        category: "Electrical",
        priority: "Medium",
        status: "Pending",
        date: "2024-03-19",
        description: "Light not working in living room",
      },
    ];
    res.status(200).json(maintenanceRequests);
  }

  else if (req.method === 'POST') {
    const newRequest = req.body;

    console.log("Received POST:", newRequest);

    // Redirect or respond
    res.status(201).json({
      message: 'Request submitted successfully',
      data: newRequest,
      redirect: 'https://img.freepik.com/free-vector/thank-you-lettering_1262-6963.jpg'
    });
  }

  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
