// utils/api.js

import axios from 'axios';

const API_URL = '/src/data/products.json'; // Replace this path with the actual path to your products.json file.

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
