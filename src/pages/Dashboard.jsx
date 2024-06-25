import React from 'react';
import Charts from '../components/Charts';
import Table from '../components/Table';
import CustomCalendar from '../components/Calendar';

const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' }
];

const data = [
  { name: 'John Doe', age: 28, email: 'john@example.com' },
  { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  // Add more data as needed
];

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Charts />
      <Table columns={columns} data={data} />
      <CustomCalendar />
    </div>
  );
};

export default Dashboard;
