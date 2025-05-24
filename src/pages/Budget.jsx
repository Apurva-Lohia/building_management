import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Budget() {
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await fetch('/api/budget_trend');
        const data = await response.json();
        setBudgetData(data);
      } catch (err) {
        console.error('Failed to fetch budget data:', err);
      }
    };

    fetchBudget();
  }, []);

  const chartData = {
    labels: budgetData.map(item => item.year),
    datasets: [
      {
        label: 'Annual Budget ($)',
        data: budgetData.map(item => item.budget_amount),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Annual Budget Trend</h1>
      <div className="max-w-4xl mx-auto">
        <Line data={chartData} />
      </div>
    </div>
  );
}

export default Budget;
