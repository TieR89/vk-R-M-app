import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const searchCharacters = async query => {
  const response = await axios.get(`${API_URL}/character`, {
    params: {
      name: query,
    },
  });
  return response.data.results;
};

export const fetchCharacterDetails = async characterId => {
  const response = await axios.get(`${API_URL}/character/${characterId}`);
  return response.data;
};

export const fetchMultipleCharacters = async characterIds => {
  const response = await axios.get(
    `${API_URL}/character/${characterIds.join(',')}`
  );
  return Array.isArray(response.data) ? response.data : [response.data];
};
