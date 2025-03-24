// CustomerManagement.jsx
import  { useState, useEffect } from 'react';
import customerApi from './api';
import './CustomerManagement.css'; // Create a separate CSS file for styling

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch all customers on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const data = await customerApi.getAllCustomers();
      setCustomers(data);
    } catch (error) {
      console.log(error)
      setMessage('Failed to fetch customers');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' ? parseInt(value) || '' : value
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      email: ''
    });
    setIsEditing(false);
    setSelectedCustomerId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isEditing) {
        await customerApi.updateCustomer(selectedCustomerId, formData);
        setMessage('Customer updated successfully!');
      } else {
        await customerApi.addCustomer(formData);
        setMessage('Customer added successfully!');
      }
      resetForm();
      fetchCustomers();
    } catch (error) {
      console.log(error)
      setMessage(`Failed to ${isEditing ? 'update' : 'add'} customer`);
    }
  };

  const handleEdit = async (id) => {
    try {
      const customer = await customerApi.getCustomerById(id);
      setFormData({
        name: customer.name,
        age: customer.age,
        email: customer.email
      });
      setSelectedCustomerId(id);
      setIsEditing(true);
    } catch (error) {
      console.log(error)
      setMessage(`Failed to fetch customer details for editing`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await customerApi.deleteCustomer(id);
        setMessage('Customer deleted successfully!');
        fetchCustomers();
      } catch (error) {
        console.error(error);
        setMessage('Failed to delete customer');
      }
    }
  };

  return (
    <div className="customer-management">
      <h2>{isEditing ? 'Edit Customer' : 'Add New Customer'}</h2>
      
      {message && <div className="message">{message}</div>}
      
      <form onSubmit={handleSubmit} className="customer-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            {isEditing ? 'Update Customer' : 'Add Customer'}
          </button>
          {isEditing && (
            <button type="button" className="btn-cancel" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>
      
      <h2>Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers found</p>
      ) : (
        <table className="customers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.email}</td>
                <td className="action-buttons">
                  <button onClick={() => handleEdit(customer.id)} className="btn-edit">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(customer.id)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerManagement;