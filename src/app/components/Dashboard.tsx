"use client"

import { Line, Doughnut, Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Basic',
        data: [120, 190, 300, 500, 200, 300],
        borderColor: '#4F4FEC',
      },
      {
        label: 'Premium',
        data: [200, 300, 400, 300, 400, 500],
        borderColor: '#FF8A00',
      },
    ],
  };

  const doughnutData = {
    labels: ['Basic', 'Premium'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#4F4FEC', '#FF8A00'],
      },
    ],
  };

  const barData = {
    labels: ['City A', 'City B', 'City C', 'City D'],
    datasets: [
      {
        label: 'No. of Orders',
        data: [150, 200, 250, 300],
        backgroundColor: ['#4F4FEC', '#FF8A00', '#00C49F', '#FF6361'],
      },
    ],
  };

  return (
    <section className="bg-secondary text-white py-10 px-6">
      {/* <div className="grid grid-cols-2 gap-6">
        <div>
          <Line data={lineData} />
        </div>
        <div>
          <Doughnut data={doughnutData} />
        </div>
        <div className="col-span-2">
          <Bar data={barData} />
        </div>
      </div> */}
    </section>
  );
};

export default Dashboard;
