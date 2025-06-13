import React, { useState } from 'react';
import EmployeeTable from '../components/EmployeeManagement';
// import Sidebar from '../components/layout/Sidebar';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import EmployeeForm from '../components/EmployeeForm'; // adjust path if needed

const EmployeeManagement = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleSubmit = (data) => {
    console.log('Submitted employee:', data);
    // TODO: Add to your state or send to backend
    handleClose();
  };

  const headCells = [
    { id: "name", numeric: false, disablePadding: true, label: "Name" },
    { id: "position", numeric: false, disablePadding: false, label: "Position" },
    { id: "department", numeric: false, disablePadding: false, label: "Department" },
    { id: "status", numeric: false, disablePadding: false, label: "Status" },
    { id: "activity", numeric: false, disablePadding: false, label: "Activity" }
  ];

  const rows = [
    {
      id: 1,
      name: "Abdullah",
      position: "Marketer",
      department: "Marketing",
      status: <div className="rounded-full bg-green-400 w-3 h-3 inline-block" title="Active"></div>,
      activity: (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:underline">Edit</button>
          <button className="text-red-600 hover:underline">Delete</button>
        </div>
      ),
    },
    {
      id: 2,
      name: "Ali",
      position: "Developer",
      department: "Engineering",
      status: <div className="rounded-full bg-yellow-400 w-3 h-3 inline-block" title="Active"></div>,
      activity: (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:underline">Edit</button>
          <button className="text-red-600 hover:underline">Delete</button>
        </div>
      ),
    },
    {
      id: 3,
      name: "Amir",
      position: "Engineer",
      department: "Operations",
      status: <div className="rounded-full bg-red-400 w-3 h-3 inline-block" title="Active"></div>,
      activity: (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:underline">Edit</button>
          <button className="text-red-600 hover:underline">Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>

      <div className="mb-4 float-right">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleOpen}
        >
          Add Employee
        </button>
      </div>

      <EmployeeTable headCells={headCells} rows={rows} />

      <h1 className='text-2xl font-bold mb-5'>Bulk Actions</h1>
      <div className="flex gap-4 mt-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Export to CSV
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Send Notification
        </button>
      </div>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add New Employee</DialogTitle>
        <DialogContent>
          <EmployeeForm onSubmit={handleSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeManagement;
