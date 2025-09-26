import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Authentication
export const loginUser = async (email, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { email, password });
  return res.data;
};

// Results
export const addResult = async (data, token) => {
  const res = await axios.post(`${API_URL}/results`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const getResults = async (student_id, token) => {
  const res = await axios.get(`${API_URL}/results/${student_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Announcements
export const getAnnouncements = async (token) => {
  const res = await axios.get(`${API_URL}/announcements`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const addAnnouncement = async (data, token) => {
  const res = await axios.post(`${API_URL}/announcements`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Schedule
export const getSchedule = async (class_grade, token) => {
  const res = await axios.get(`${API_URL}/schedules/${class_grade}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const addSchedule = async (data, token) => {
  const res = await axios.post(`${API_URL}/schedules`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Opportunities
export const getOpportunities = async (token) => {
  const res = await axios.get(`${API_URL}/opportunities`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const addOpportunity = async (data, token) => {
  const res = await axios.post(`${API_URL}/opportunities`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
