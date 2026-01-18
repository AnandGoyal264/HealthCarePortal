const Dashboard = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded shadow">
            <h3 className="font-semibold">Appointments</h3>
            <p>View & manage appointments</p>
          </div>
  
          <div className="bg-blue-100 p-4 rounded shadow">
            <h3 className="font-semibold">Wellness</h3>
            <p>Track health vitals</p>
          </div>
  
          <div className="bg-purple-100 p-4 rounded shadow">
            <h3 className="font-semibold">Health Tips</h3>
            <p>Daily wellness tips</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  