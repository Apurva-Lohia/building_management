export default function handler(req, res) {
  // Mock building status data
  const buildingStatus = {
    elevatorStatus: 'operational',
    hvacStatus: 'operational',
    lastUpdated: new Date().toISOString()
  };

  // Send JSON response
  res.status(200).json(buildingStatus);
}
