// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const customerApi = {
  // Get all customers
  getAllCustomers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/viewcustomer`);
      return response.data;
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  },

  // Get customer by ID
  getCustomerById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/viewcustomer/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching customer with ID ${id}:`, error);
      throw error;
    }
  },

  // Add new customer
  addCustomer: async (customer) => {
    try {
      // Using URLSearchParams instead of FormData for x-www-form-urlencoded
      const params = new URLSearchParams();
      params.append('name', customer.name);
      params.append('age', customer.age);
      params.append('email', customer.email);
      
      const response = await axios.post(`${API_BASE_URL}/addcustomer`, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error adding customer:', error);
      throw error;
    }
  },

  // Update existing customer
  updateCustomer: async (id, customer) => {
    try {
      // Using URLSearchParams instead of FormData for x-www-form-urlencoded
      const params = new URLSearchParams();
      params.append('name', customer.name);
      params.append('age', customer.age);
      params.append('email', customer.email);
      
      const response = await axios.post(`${API_BASE_URL}/updatecustomer/${id}`, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating customer with ID ${id}:`, error);
      throw error;
    }
  },

  // Delete customer
  deleteCustomer: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/deletecustomer/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting customer with ID ${id}:`, error);
      throw error;
    }
  }
};

export default customerApi;