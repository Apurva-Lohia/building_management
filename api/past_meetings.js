export default function handler(req, res) {
  // Hardcoded past meetings data
  const pastMeetings = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "2024-03-15",
      time: "10:00 AM",
      venue: "Clubhouse Hall",
      summary: "Discussion on budget allocation and maintenance plans."
    },
    {
      id: 2,
      title: "Emergency Water Supply Meeting",
      date: "2024-02-20",
      time: "5:00 PM",
      venue: "Community Center",
      summary: "Addressing recent water shortages and solutions."
    },
    {
      id: 3,
      title: "Security Review Meeting",
      date: "2024-01-10",
      time: "3:00 PM",
      venue: "Main Office",
      summary: "Reviewing security policies and new measures."
    }
  ];

  // Send JSON response
  res.status(200).json(pastMeetings);
}
