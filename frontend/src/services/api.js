import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your backend URL

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${API_URL}/questions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};