import axios from 'axios';

export const apiUrl = process.env.REACT_APP_API_URL;
export const apiKey = process.env.REACT_APP_API_KEY;
export const instance = axios.create({
  baseURL: apiUrl,
  headers: { 'Authorization': `Client-ID ${apiKey}` }
});

export const NBS = '\xA0'; // Non-Breaking Space (неразрывный пробел)
