export default function handler(req, res) {
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
