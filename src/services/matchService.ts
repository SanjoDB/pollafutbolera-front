import axios from 'axios';

const API_URL = 'http://localhost:8000/pollafutbolera/api/matches';  // Ajusta según la URL del backend

export const getMatches = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }
};

export const getMatchById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching match with id ${id}:`, error);
    throw error;
  }
};

export const createMatch = async (matchData: any) => {
  try {
    const response = await axios.post(API_URL, matchData);
    return response.data;
  } catch (error) {
    console.error('Error creating match:', error);
    throw error;
  }
};