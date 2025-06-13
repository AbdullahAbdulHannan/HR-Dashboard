import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';


const EmployeeForm = ({ employee, onSubmit }) => {
  const defaultEmployee = {
    id: employee?.id || crypto.randomUUID(),
    name: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    hireDate: new Date().toISOString().split('T')[0],
    status: 'active',
  };

  const [formData, setFormData] = useState(employee || defaultEmployee);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        title={
          <Typography variant="h6">
            {employee ? 'Edit Employee Profile' : 'Add New Employee'}
          </Typography>
        }
      />
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Position"
                name="position"
                placeholder="Software Engineer"
                value={formData.position}
                onChange={handleChange}
                error={!!errors.position}
                helperText={errors.position}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                error={!!errors.department}
                helperText={errors.department}
              >
                <MenuItem value="">Select Department</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="HR">Human Resources</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Operations">Operations</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Hire Date"
                name="hireDate"
                type="date"
                value={formData.hireDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errors.hireDate}
                helperText={errors.hireDate}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="on-leave">On Leave</MenuItem>
                <MenuItem value="terminated">Terminated</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions sx={{ justifyContent: 'flex-end', px: 3, pb: 2 }}>
          <Button variant="outlined" type="button">
            Cancel
          </Button>
          <Button variant="contained" type="submit" color="primary">
            {employee ? 'Update Employee' : 'Add Employee'}
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default EmployeeForm;
